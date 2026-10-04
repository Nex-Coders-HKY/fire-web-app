import React from 'react';
import { MapPin, Phone, Mail, Clock, ShieldCheck } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#0f1318] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand & Overview Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-red-600/40 shrink-0 bg-slate-900">
                <img
                  src="/Logo.png"
                  alt="FireProtectSafety Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-xl text-white">
                  FireProtect<span className="text-red-500">Safety</span>
                </span>
                <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
                  PSQCA · NFPA · ISO 9001 · Sindh Civil Defence
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Karachi's trusted turnkey supplier and civil-defence licensed installer of certified
              fire extinguishers, gas suppression systems, and alarm infrastructure. Protecting
              commercial facilities, factories, and residential buildings across Karachi since 2011.
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/40 border border-red-800/40 text-red-400 text-xs font-semibold">
                <MapPin className="w-3.5 h-3.5" />
                <span>Karachi, Pakistan (Provincial Operations)</span>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-white mb-4">
              Navigation & Scope
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#guidance" className="hover:text-red-400 transition-colors">
                  Fire Classification Guidance
                </a>
              </li>
              <li>
                <a href="#catalogue" className="hover:text-red-400 transition-colors">
                  Products & Extinguishers
                </a>
              </li>
              <li>
                <a href="#refilling" className="hover:text-red-400 transition-colors">
                  Refilling & Hydro-Testing
                </a>
              </li>
              <li>
                <a href="#materials" className="hover:text-red-400 transition-colors">
                  Safety Hardware & Materials
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-red-400 transition-colors">
                  Completed Projects Portfolio
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-red-400 transition-colors">
                  Client Reviews & Audits
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Support & 24/7 Hotline Column */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-white mb-4">
              24/7 Emergency & Inquiries
            </h4>

            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-red-600/20 text-red-400 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Emergency Desk & WhatsApp</div>
                  <a
                    href="tel:+923121046529"
                    className="font-bold text-white hover:text-red-400 transition-colors"
                  >
                    +92 312 1046529
                  </a>
                </div>
              </li>

              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-red-600/20 text-red-400 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Corporate Quotations</div>
                  <a
                    href="mailto:hello@fireprotectsafety.pk"
                    className="font-bold text-white hover:text-red-400 transition-colors"
                  >
                    hello@fireprotectsafety.pk
                  </a>
                </div>
              </li>

              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-red-600/20 text-red-400 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Response Readiness</div>
                  <span className="font-bold text-emerald-400">24/7 On-Call Deployment</span>
                </div>
              </li>
            </ul>

            <div className="pt-2 flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-red-500 shrink-0" />
              <span>PSQCA, NFPA & Sindh Civil Defence Compliant</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>© {new Date().getFullYear()} FireProtectSafety. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-slate-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-slate-400 transition-colors">
              Terms of Service
            </a>
            <a href="#quote" className="hover:text-red-400 transition-colors">
              Request Survey
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
