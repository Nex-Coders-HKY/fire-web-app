import React from 'react';
import {
  Shield,
  Flame,
  Layers,
  Compass,
  Box,
  Gauge,
  Lock,
  Droplets,
  MessageCircle,
  CheckCircle2,
} from 'lucide-react';
import { materialsData } from '../data/reviews';

export const Materials: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Shield':
        return <Shield className="w-5 h-5 text-red-600" />;
      case 'Flame':
        return <Flame className="w-5 h-5 text-red-600" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-red-600" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-red-600" />;
      case 'Box':
        return <Box className="w-5 h-5 text-red-600" />;
      case 'Gauge':
        return <Gauge className="w-5 h-5 text-red-600" />;
      case 'Lock':
        return <Lock className="w-5 h-5 text-red-600" />;
      case 'Droplets':
        return <Droplets className="w-5 h-5 text-red-600" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-red-600" />;
    }
  };

  return (
    <section id="materials" className="py-16 md:py-24 bg-slate-50/70 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-red-600 mb-2">
              Hardware & Compliance Parts
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-slate-900">
              Essential Fire Safety Materials
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl">
              Complete inventory of replacement accessories, mounting hardware, certified refill
              chemicals, and exit signage needed to keep your facility compliant.
            </p>
          </div>
          <a
            href="https://wa.me/923121046529?text=Hi%2C%20I%20need%20to%20order%20fire%20safety%20materials%20and%20accessories."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-bold text-white gradient-crimson rounded-xl shadow-sm self-start md:self-end"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Order Accessories on WhatsApp</span>
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {materialsData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-5 border border-slate-200 shadow-card hover:shadow-lift hover:border-red-200 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-red-50 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                  {getIcon(item.iconName)}
                </div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                  {item.tag}
                </div>
                <h3 className="font-display font-bold text-slate-900 text-sm sm:text-base">
                  {item.name}
                </h3>
                <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                  {item.note}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100">
                <a
                  href={`https://wa.me/923121046529?text=${encodeURIComponent(
                    `Hi, I want to inquire about availability and pricing for: ${item.name} (${item.note}).`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-bold text-red-600 bg-red-50 hover:bg-red-600 hover:text-white transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Inquire</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
