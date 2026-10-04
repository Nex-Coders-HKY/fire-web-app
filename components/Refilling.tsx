import React from 'react';
import {
  CheckCircle,
  Truck,
  RotateCw,
  Search,
  Activity,
  Award,
  MessageCircle,
  ArrowRight,
} from 'lucide-react';

export const Refilling: React.FC = () => {
  const refillSteps = [
    {
      num: 1,
      title: 'Detailed Visual & Mechanical Inspection',
      desc: 'We thoroughly inspect the steel body shell, discharge hose, siphon tube, pressure gauge, and safety pin for corrosion, dents, or blockages.',
      icon: Search,
    },
    {
      num: 2,
      title: 'Full Discharge & Agent Refill',
      desc: 'Residual or expired chemical agent is evacuated cleanly. We reload with certified virgin agent (90% MAP DCP, Food-Grade CO₂, or AFFF 3%/6%) to exact weight specifications.',
      icon: RotateCw,
    },
    {
      num: 3,
      title: 'Hydrostatic Pressure & Leak Testing',
      desc: 'The cylinder and discharge valve undergo hydrostatic pressure testing to certify pressure retention under sustained operating limits.',
      icon: Activity,
    },
    {
      num: 4,
      title: 'Dated Service Tag & Certification',
      desc: 'A permanent, serialized, tamper-evident inspection collar and PSQCA-compliant service tag is attached, keeping your facility 100% audit-ready.',
      icon: Award,
    },
  ];

  return (
    <section id="refilling" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Information & Bullet Points */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-red-600 mb-2">
                Certified Maintenance & Hydro-Testing
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-slate-900 leading-tight">
                Keep Every Extinguisher Ready to Fire.
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                An extinguisher is useless if the valve jams or pressure drops when an emergency
                ignites. We refill, hydro-test, and recertify cylinders of any brand across Karachi
                with fast doorstep pickup.
              </p>
            </div>

            {/* Checkmark List */}
            <div className="space-y-3.5 pt-2">
              <div className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full gradient-crimson flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle className="w-3.5 h-3.5 text-white" />
                </span>
                <span className="text-sm font-semibold text-slate-800">
                  Mandatory refill after every discharge — even a partial 2-second test burst
                </span>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full gradient-crimson flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle className="w-3.5 h-3.5 text-white" />
                </span>
                <span className="text-sm font-semibold text-slate-800">
                  Annual compliance inspection & recertification for PSQCA, Civil Defence, and insurance audits
                </span>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full gradient-crimson flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle className="w-3.5 h-3.5 text-white" />
                </span>
                <span className="text-sm font-semibold text-slate-800">
                  All cylinder brands and mediums supported: DCP, CO₂, AFFF Foam, Wet Chemical, and Clean Agent
                </span>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full gradient-crimson flex items-center justify-center shrink-0 mt-0.5">
                  <Truck className="w-3.5 h-3.5 text-white" />
                </span>
                <span className="text-sm font-semibold text-slate-800">
                  Doorstep collection and delivery available for factories, corporate towers, and clinics throughout Karachi
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a
                href="https://wa.me/923121046529?text=Hi%2C%20I%20need%20my%20fire%20extinguisher(s)%20refilled%2Fserviced.%20Please%20share%20details."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold text-white gradient-crimson rounded-xl shadow-elegant hover:opacity-95 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Book a Refill on WhatsApp</span>
              </a>

              <a
                href="#quote"
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-xl transition-all"
              >
                <span>Ask Maintenance Pricing</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: 4-Step Interactive Process Timeline */}
          <div className="lg:col-span-6 bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200">
            <h3 className="font-display font-bold text-lg text-slate-900 mb-6 flex items-center justify-between">
              <span>Standard 4-Stage Servicing Protocol</span>
              <span className="text-xs font-semibold text-red-600 bg-red-50 px-2.5 py-1 rounded-md">
                NFPA 10 Standard
              </span>
            </h3>

            <div className="space-y-6 relative before:absolute before:left-5 before:top-4 before:bottom-4 before:w-0.5 before:bg-slate-200">
              {refillSteps.map((step) => {
                const IconComp = step.icon;
                return (
                  <div key={step.num} className="relative flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white border-2 border-red-600 text-red-600 font-display font-bold flex items-center justify-center shrink-0 z-10 shadow-sm text-sm">
                      {step.num}
                    </div>
                    <div className="pt-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-display font-bold text-slate-900 text-sm sm:text-base">
                          {step.title}
                        </h4>
                      </div>
                      <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
