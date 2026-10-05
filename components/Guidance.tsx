'use client';

import React, { useState } from 'react';
import {
  Flame,
  AlertTriangle,
  CheckCircle,
  HelpCircle,
  Sparkles,
  Zap,
  UtensilsCrossed,
  Boxes,
  Building,
} from 'lucide-react';
import { guidanceClasses } from '../data/guidance';

interface GuidanceProps {
  onSelectCategory?: (category: string) => void;
}

export const Guidance: React.FC<GuidanceProps> = ({ onSelectCategory }) => {
  const [selectedClassId, setSelectedClassId] = useState<string | null>(null);

  const getIcon = (type: string) => {
    switch (type) {
      case 'combustibles':
        return <Boxes className="w-5 h-5 text-white" />;
      case 'flammable':
        return <Flame className="w-5 h-5 text-white" />;
      case 'electrical':
        return <Zap className="w-5 h-5 text-white" />;
      case 'cooking':
        return <UtensilsCrossed className="w-5 h-5 text-white" />;
      case 'office':
        return <Building className="w-5 h-5 text-white" />;
      case 'industrial':
        return <Flame className="w-5 h-5 text-white" />;
      default:
        return <Sparkles className="w-5 h-5 text-white" />;
    }
  };

  return (
    <section id="guidance" className="py-16 md:py-24 bg-slate-50/70 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="text-xs font-bold uppercase tracking-widest text-red-600 mb-2">
            Safety Engineering Guide
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-slate-900 leading-tight">
            Which Extinguisher for Which Fire?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Fires are classified strictly by what is burning. Using an incorrect extinguishing medium
            can cause fatal electrocution or violent fuel vapor explosions. Use this certified reference
            guide to protect your staff and property.
          </p>
        </div>

        {/* Guidance Class Cards Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {guidanceClasses.map((item) => {
            const isSelected = selectedClassId === item.id;
            return (
              <div
                key={item.id}
                onClick={() => setSelectedClassId(isSelected ? null : item.id)}
                className={`rounded-2xl p-5 md:p-6 bg-white border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'border-red-500 ring-2 ring-red-500/20 shadow-lift'
                    : 'border-slate-200 shadow-card hover:shadow-md hover:border-slate-300'
                }`}
              >
                <div>
                  <div className="flex items-center gap-3">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 shadow-sm"
                      style={{ backgroundColor: item.color }}
                    >
                      {getIcon(item.iconType)}
                    </div>
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        {item.classCode}
                      </div>
                      <h3 className="font-display font-bold text-slate-900 text-base md:text-lg">
                        {item.name}
                      </h3>
                    </div>
                  </div>

                  <p className="mt-3 text-xs md:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 space-y-3">
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5 flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Approved Extinguishers:</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {item.suitable.map((med) => (
                        <span
                          key={med}
                          className="px-2.5 py-1 text-xs font-semibold rounded-md bg-slate-100 text-slate-800 hover:bg-slate-200 transition-colors"
                        >
                          {med}
                        </span>
                      ))}
                    </div>
                  </div>

                  {item.avoid && (
                    <div className="flex items-start gap-2 p-2.5 rounded-lg bg-red-50/80 border border-red-200/60 text-red-900 text-xs font-medium">
                      <AlertTriangle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                      <span>{item.avoid}</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Free Consultation Callout */}
        <div className="mt-10 p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-red-600 shrink-0">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">
                Not sure which fire class rating your facility falls under?
              </div>
              <div className="text-xs text-slate-500">
                Our safety engineers can assess your layout, machinery, and electrical load on-site.
              </div>
            </div>
          </div>
          <a
            href="https://wa.me/923452072882?text=Hi%2C%20I%20need%20guidance%20on%20choosing%20the%20right%20fire%20extinguishers%20for%20my%20site."
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto text-center px-4 py-2.5 text-xs font-bold text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap"
          >
            Ask a Fire Safety Engineer
          </a>
        </div>
      </div>
    </section>
  );
};
