'use client';

import React, { useState } from 'react';
import {
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Building,
  Factory,
  GraduationCap,
  Warehouse,
  Home,
  Store,
  Send,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  User,
} from 'lucide-react';
import { QuoteFormData } from '../types';

export const QuoteWizard: React.FC = () => {
  const [step, setStep] = useState<number>(0);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const [formData, setFormData] = useState<QuoteFormData>({
    facility: 'Office',
    floors: '2',
    types: ['Dry Chemical (DCP)', 'CO₂ Gas Extinguisher'],
    name: '',
    phone: '',
    email: '',
    location: '',
    urgency: 'Standard',
  });

  const stepLabels = ['Facility Type', 'Equipment Scope', 'Contact Info'];

  const facilities = [
    { label: 'Office', icon: Building },
    { label: 'Factory', icon: Factory },
    { label: 'School', icon: GraduationCap },
    { label: 'Warehouse', icon: Warehouse },
    { label: 'Residential', icon: Home },
    { label: 'Retail', icon: Store },
  ];

  const equipTypes = [
    'Dry Chemical (DCP)',
    'CO₂ Gas Extinguisher',
    'AFFF Foam Extinguisher',
    'Wet Chemical (Kitchen)',
    'Water Extinguisher',
    'Fire Alarm System',
    'Fire Suppression System',
    'Fire Hydrant System',
    'Annual Maintenance / Refill',
  ];

  const handleFacilitySelect = (facility: string) => {
    setFormData((prev) => ({ ...prev, facility }));
  };

  const toggleEquipType = (type: string) => {
    setFormData((prev) => {
      const exists = prev.types.includes(type);
      return {
        ...prev,
        types: exists ? prev.types.filter((t) => t !== type) : [...prev.types, type],
      };
    });
  };

  const canContinue = () => {
    if (step === 0) return Boolean(formData.facility && formData.floors);
    if (step === 1) return formData.types.length > 0;
    if (step === 2) return Boolean(formData.name.trim() && formData.phone.trim());
    return false;
  };

  const buildWhatsAppMessage = () => {
    return (
      `*New Fire Safety Quote Request - FireProtectSafety*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Email:* ${formData.email || 'N/A'}\n` +
      `*Karachi Location:* ${formData.location || 'N/A'}\n` +
      `*Facility Type:* ${formData.facility}\n` +
      `*Floors:* ${formData.floors}\n` +
      `*Required Systems:* ${formData.types.join(', ')}\n`
    );
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!canContinue()) return;

    setIsSubmitting(true);

    const waText = encodeURIComponent(buildWhatsAppMessage());
    const waUrl = `https://wa.me/923121046529?text=${waText}`;

    try {
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: 'PUBLIC_FIRE_SAFETY_SUBMISSION',
          subject: `FireProtectSafety Quote: ${formData.facility} - ${formData.name}`,
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          location: formData.location,
          facility: formData.facility,
          floors: formData.floors,
          equipment: formData.types.join(', '),
        }),
      }).catch(() => null);
    } catch {
      // Ignore background post failure
    }

    try {
      window.open(waUrl, '_blank');
    } catch {
      // fallback
    }

    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <section id="quote" className="py-16 md:py-24 gradient-dark text-white relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-800/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-red-500/50 shrink-0">
                <img src="/Logo.png" alt="FireProtectSafety Logo" className="w-full h-full object-cover" />
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>FireProtectSafety Custom Quote</span>
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold leading-tight text-white">
              Get Your Engineering Quote in Under 24 Hours.
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Tell us about your facility in Karachi. Our licensed engineers will design an audit-ready
              equipment schedule and transparent quotation tailored for your site.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm text-slate-200">
                <div className="w-6 h-6 rounded-full gradient-crimson flex items-center justify-center shrink-0">
                  <CheckCircle className="w-3.5 h-3.5 text-white" />
                </div>
                <span>Free on-site engineering assessment anywhere in Karachi</span>
              </div>

              <div className="flex items-center gap-3 text-sm text-slate-200">
                <div className="w-6 h-6 rounded-full gradient-crimson flex items-center justify-center shrink-0">
                  <CheckCircle className="w-3.5 h-3.5 text-white" />
                </div>
                <span>100% PSQCA certified virgin chemical agents & hydro-tested cylinders</span>
              </div>

              <div className="flex items-center gap-3 text-sm text-slate-200">
                <div className="w-6 h-6 rounded-full gradient-crimson flex items-center justify-center shrink-0">
                  <CheckCircle className="w-3.5 h-3.5 text-white" />
                </div>
                <span>ISO 9001:2015 & Sindh Civil Defence compliant warranty tagging</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300">
              Direct Emergency Hotline:{' '}
              <a href="tel:+923121046529" className="text-red-400 font-bold underline ml-1">
                +92 312 1046529
              </a>
            </div>
          </div>

          {/* Right Column: Multi-Step Interactive Card */}
          <div className="lg:col-span-7 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 md:p-10 shadow-lift">
            {submitted ? (
              <div className="py-10 text-center space-y-4 animate-in fade-in zoom-in duration-300">
                <div className="w-16 h-16 rounded-full gradient-crimson mx-auto flex items-center justify-center text-white shadow-elegant">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="font-display font-bold text-2xl text-white">
                  Quotation Request Sent!
                </h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-white">{formData.name}</strong>. Your facility
                  details for <strong className="text-red-400">{formData.facility}</strong> have been
                  dispatched to <strong className="text-white">FireProtectSafety</strong> engineering desk.
                  We will review and reach out within 24 hours.
                </p>

                <div className="pt-4 flex flex-wrap justify-center gap-3">
                  <a
                    href="https://wa.me/923121046529"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl gradient-crimson text-white text-xs sm:text-sm font-bold shadow-elegant"
                  >
                    <span>Message Directly on WhatsApp</span>
                  </a>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setStep(0);
                    }}
                    className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold transition-colors"
                  >
                    Submit Another Facility
                  </button>
                </div>
              </div>
            ) : (
              <div>
                {/* Step Indicators Header */}
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
                  {stepLabels.map((lbl, idx) => {
                    const isActive = idx === step;
                    const isDone = idx < step;
                    return (
                      <div key={lbl} className="flex items-center gap-2 sm:gap-3">
                        <div
                          className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                            isActive
                              ? 'gradient-crimson text-white shadow-elegant scale-110'
                              : isDone
                              ? 'bg-emerald-600 text-white'
                              : 'bg-white/10 text-slate-400'
                          }`}
                        >
                          {isDone ? <CheckCircle className="w-4 h-4" /> : idx + 1}
                        </div>
                        <span
                          className={`text-xs font-bold hidden sm:inline-block ${
                            isActive ? 'text-white' : 'text-slate-400'
                          }`}
                        >
                          {lbl}
                        </span>
                        {idx < stepLabels.length - 1 && (
                          <div className="w-8 sm:w-12 h-px bg-white/10 ml-2" />
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Step 1: Facility Type & Size */}
                {step === 0 && (
                  <div className="space-y-6 animate-in fade-in duration-200">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
                        Select Facility Category:
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                        {facilities.map((f) => {
                          const IconC = f.icon;
                          const isSelected = formData.facility === f.label;
                          return (
                            <button
                              key={f.label}
                              type="button"
                              onClick={() => handleFacilitySelect(f.label)}
                              className={`p-3.5 rounded-xl border text-left flex items-center gap-2.5 transition-all ${
                                isSelected
                                  ? 'border-red-500 bg-red-600/20 text-white shadow-sm'
                                  : 'border-white/10 bg-white/5 hover:bg-white/10 text-slate-300'
                              }`}
                            >
                              <IconC
                                className={`w-4 h-4 ${
                                  isSelected ? 'text-red-400' : 'text-slate-400'
                                }`}
                              />
                              <span className="text-xs sm:text-sm font-semibold">{f.label}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                        Total Number of Floors / Levels:
                      </label>
                      <input
                        type="number"
                        min="1"
                        max="80"
                        value={formData.floors}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...prev, floors: e.target.value }))
                        }
                        className="w-full bg-white/5 border border-white/15 focus:border-red-500 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-red-500 transition-colors"
                        placeholder="e.g. 3 floors"
                      />
                    </div>
                  </div>
                )}

                {/* Step 2: Equipment Scope Selection */}
                {step === 1 && (
                  <div className="space-y-4 animate-in fade-in duration-200">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                      Select Required Equipment & Safety Services (Multi-select):
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {equipTypes.map((type) => {
                        const isChecked = formData.types.includes(type);
                        return (
                          <button
                            key={type}
                            type="button"
                            onClick={() => toggleEquipType(type)}
                            className={`p-3 rounded-xl border text-left flex items-center justify-between text-xs sm:text-sm font-semibold transition-all ${
                              isChecked
                                ? 'border-red-500 bg-red-600/20 text-white'
                                : 'border-white/10 bg-white/5 hover:bg-white/10 text-slate-300'
                            }`}
                          >
                            <span>{type}</span>
                            <div
                              className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                                isChecked
                                  ? 'border-red-500 bg-red-600 text-white'
                                  : 'border-slate-500 bg-transparent'
                              }`}
                            >
                              {isChecked && <CheckCircle className="w-3 h-3" />}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Step 3: Contact Information */}
                {step === 2 && (
                  <div className="space-y-4 animate-in fade-in duration-200">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        Contact Person / Company Name *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData((prev) => ({ ...prev, name: e.target.value }))
                          }
                          className="w-full bg-white/5 border border-white/15 focus:border-red-500 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                          placeholder="e.g. Tariq Mehmood"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                          Phone / WhatsApp Number *
                        </label>
                        <div className="relative">
                          <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                          <input
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) =>
                              setFormData((prev) => ({ ...prev, phone: e.target.value }))
                            }
                            className="w-full bg-white/5 border border-white/15 focus:border-red-500 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                            placeholder="e.g. 0312 1234567"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                          Email Address
                        </label>
                        <div className="relative">
                          <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) =>
                              setFormData((prev) => ({ ...prev, email: e.target.value }))
                            }
                            className="w-full bg-white/5 border border-white/15 focus:border-red-500 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                            placeholder="you@company.pk"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        Facility Location in Karachi (Area / Town)
                      </label>
                      <div className="relative">
                        <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <input
                          type="text"
                          value={formData.location}
                          onChange={(e) =>
                            setFormData((prev) => ({ ...prev, location: e.target.value }))
                          }
                          className="w-full bg-white/5 border border-white/15 focus:border-red-500 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                          placeholder="e.g. Clifton, SITE Area, Korangi, Gulshan, DHA"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Form Navigation Controls */}
                <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
                  <button
                    type="button"
                    disabled={step === 0}
                    onClick={() => setStep((s) => s - 1)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-300 hover:text-white hover:bg-white/5 disabled:opacity-30 disabled:pointer-events-none transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back</span>
                  </button>

                  {step < 2 ? (
                    <button
                      type="button"
                      disabled={!canContinue()}
                      onClick={() => setStep((s) => s + 1)}
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl gradient-crimson text-white text-xs sm:text-sm font-bold shadow-elegant hover:opacity-95 disabled:opacity-40 disabled:pointer-events-none transition-all"
                    >
                      <span>Continue</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      type="button"
                      disabled={!canContinue() || isSubmitting}
                      onClick={() => handleSubmit()}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl gradient-crimson text-white text-xs sm:text-sm font-bold shadow-elegant hover:opacity-95 disabled:opacity-40 disabled:pointer-events-none transition-all"
                    >
                      <Send className="w-4 h-4" />
                      <span>{isSubmitting ? 'Submitting...' : 'Send Quotation Request'}</span>
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
