import React from 'react';
import {
  ShieldCheck,
  ArrowRight,
  Flame,
  Award,
  Clock,
  CheckCircle2,
  Factory,
  Building2,
  GraduationCap,
  Warehouse,
  Check,
} from 'lucide-react';

export const Hero: React.FC = () => {
  const industries = [
    {
      title: 'Textile Mills',
      note: 'High-risk hot works & spinning halls',
      icon: Factory,
      highlight: 'DCP & Hydrants',
    },
    {
      title: 'Corporate Offices',
      note: 'Class A & E rated clean systems',
      icon: Building2,
      highlight: 'CO₂ & Smoke Detectors',
    },
    {
      title: 'Schools & Colleges',
      note: 'Audit compliance & staff training',
      icon: GraduationCap,
      highlight: 'PSQCA Certified',
    },
    {
      title: 'Warehouses & Logistics',
      note: 'High-rack sprinkler & hydrant loops',
      icon: Warehouse,
      highlight: 'NFPA 24 Standard',
    },
  ];

  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 bg-gradient-to-b from-slate-50 via-white to-slate-50/50">
      {/* Decorative ambient background glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-100/50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-amber-50/60 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200/80 text-red-900 text-xs font-bold tracking-wide uppercase shadow-sm">
                <ShieldCheck className="w-4 h-4 text-red-600 shrink-0" />
                <span>FireProtectSafety · ISO 9001 · NFPA · PSQCA · Karachi</span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-slate-900 leading-[1.12]">
              Complete Fire Protection by{' '}
              <span className="text-gradient-crimson">FireProtectSafety</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
              Karachi's trusted single-source fire safety company. We supply, install, and service
              certified fire extinguishers, automated suppression systems, and alarm loops for
              textile mills, commercial towers, and industrial estates.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 pt-2">
              <a
                href="#quote"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-bold text-white gradient-crimson rounded-xl shadow-elegant hover:opacity-95 transition-all hover:-translate-y-0.5 active:scale-95"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm sm:text-base font-bold text-slate-800 bg-white hover:bg-slate-50 border-2 border-slate-800 rounded-xl transition-all hover:bg-slate-900 hover:text-white active:scale-95"
              >
                <span>See Our Work</span>
              </a>

              <a
                href="https://wa.me/923121046529?text=Hi%20FireProtectSafety%2C%20I%20need%20a%20fire%20safety%20quote%20for%20our%20Karachi%20site."
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3.5 text-sm font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-xl transition-colors active:scale-95"
              >
                <span>WhatsApp Instant Inquiry</span>
              </a>
            </div>

            {/* Credibility badges */}
            <div className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center gap-y-3 gap-x-6 text-xs sm:text-sm font-medium text-slate-600">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-red-600 shrink-0" />
                <span><strong className="text-slate-900 font-bold">500+</strong> Installations</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-red-600 shrink-0" />
                <span><strong className="text-slate-900 font-bold">24/7</strong> Emergency Desk</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                <span><strong className="text-slate-900 font-bold">5-Year</strong> Warranty</span>
              </div>
            </div>
          </div>

          {/* Right Column: Industry Cards & Risk Protection Grid */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Turnkey Protection For
              </span>
              <span className="text-[11px] font-semibold text-red-600 bg-red-50 px-2 py-0.5 rounded">
                Sindh Civil Defence Approved
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {industries.map((ind) => {
                const IconComponent = ind.icon;
                return (
                  <div
                    key={ind.title}
                    className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-card hover:shadow-lift hover:border-red-200 transition-all duration-300 group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center mb-3 group-hover:bg-red-50 group-hover:text-red-600 transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="font-display font-bold text-slate-900 text-sm sm:text-base leading-snug">
                      {ind.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                      {ind.note}
                    </p>
                    <div className="mt-3 text-[10px] font-bold text-red-700 bg-red-50/80 px-2 py-1 rounded inline-block">
                      {ind.highlight}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Consultation Banner with Logo */}
            <div className="p-4 rounded-xl bg-slate-900 text-white flex items-center justify-between gap-3 shadow-md">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-red-500/50 shrink-0">
                  <img src="/Logo.png" alt="FireProtectSafety" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="text-xs font-bold">Free On-Site Safety Survey</div>
                  <div className="text-[11px] text-slate-300">Certified engineer inspection anywhere in Karachi</div>
                </div>
              </div>
              <a
                href="#quote"
                className="text-xs font-bold text-white bg-red-600 hover:bg-red-700 px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors"
              >
                Book Survey
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
