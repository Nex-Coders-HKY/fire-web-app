'use client';

import React, { useState } from 'react';
import {
  MessageCircle,
  Mail,
  ShieldCheck,
  CheckCircle,
  Layers,
  Thermometer,
  Timer,
  Info,
} from 'lucide-react';
import { productData, tabOrder } from '../data/products';
import { ProductVisual } from './ProductVisual';

export const Catalogue: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('DCP');
  const [activeVariantSize, setActiveVariantSize] = useState<string>('6kg');

  const currentProduct = productData[activeTab] || productData['DCP'];

  // Handle tab switch
  const handleTabChange = (key: string) => {
    setActiveTab(key);
    const prod = productData[key];
    if (prod && prod.variants.length > 0) {
      setActiveVariantSize(prod.variants[0].size);
    }
  };

  const currentVariant =
    currentProduct.variants.find((v) => v.size === activeVariantSize) ||
    currentProduct.variants[0];

  const waMessage = `Hi, I am interested in: ${currentVariant?.title || currentProduct.title} (${currentProduct.variantLabel}: ${activeVariantSize}). Please share details and pricing for our Karachi facility.`;
  const waUrl = `https://wa.me/923121046529?text=${encodeURIComponent(waMessage)}`;

  const getSpecIcon = (index: number) => {
    switch (index) {
      case 0:
        return <ShieldCheck className="w-4 h-4 text-red-600 mb-1" />;
      case 1:
        return <Thermometer className="w-4 h-4 text-red-600 mb-1" />;
      case 2:
        return <Timer className="w-4 h-4 text-red-600 mb-1" />;
      default:
        return <Layers className="w-4 h-4 text-red-600 mb-1" />;
    }
  };

  return (
    <section id="catalogue" className="py-16 md:py-24 bg-slate-50/50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-red-600 mb-2">
              Products & Certified Systems
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-slate-900 leading-tight">
              Certified Extinguishers & Fire Systems
            </h2>
          </div>
          <div className="flex items-center gap-2 text-xs md:text-sm text-slate-600 bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-sm self-start md:self-end">
            <Info className="w-4 h-4 text-red-600 shrink-0" />
            <span>Contact on WhatsApp or email for quantity discounts & installation</span>
          </div>
        </div>

        {/* Navigation Category Tabs */}
        <div className="mt-8 flex overflow-x-auto pb-2 sm:pb-0 sm:flex-wrap gap-2 scrollbar-none">
          {tabOrder.map((key) => {
            const prod = productData[key];
            if (!prod) return null;
            const isActive = activeTab === key;
            return (
              <button
                key={key}
                onClick={() => handleTabChange(key)}
                className={`px-4 py-2 rounded-full text-xs md:text-sm font-semibold transition-all ${
                  isActive
                    ? 'text-white gradient-crimson shadow-elegant scale-[1.02]'
                    : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                {prod.label}
              </button>
            );
          })}
        </div>

        {/* Active Product Panel */}
        <div className="mt-8 rounded-3xl bg-white border border-slate-200/90 shadow-card p-6 sm:p-8 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Visual Showcase Box */}
          <div className="lg:col-span-5 bg-gradient-to-b from-slate-50 to-slate-100/70 border border-slate-200/80 rounded-2xl relative min-h-[300px] md:min-h-[380px] flex items-center justify-center p-6 overflow-hidden">
            {/* Tag badge */}
            <div
              className="absolute top-4 left-4 px-3 py-1 text-xs font-bold rounded-full text-white shadow-sm"
              style={{ backgroundColor: currentProduct.color }}
            >
              {currentProduct.tag}
            </div>

            {/* Direct Product Image Display */}
            <div className="relative w-full h-full flex items-center justify-center py-4">
              <img
                src={currentVariant.img || `/images/${activeTab.toLowerCase()}.jpg`}
                alt={currentVariant.title || currentProduct.title}
                className="max-h-64 sm:max-h-80 w-auto object-contain drop-shadow-xl transition-transform duration-300 hover:scale-105"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  const fallback = target.parentElement?.querySelector('.product-fallback');
                  if (fallback) (fallback as HTMLElement).style.display = 'flex';
                }}
              />
              <div className="product-fallback hidden items-center justify-center w-full h-full">
                <ProductVisual
                  category={activeTab}
                  variantSize={activeVariantSize}
                  color={currentProduct.color}
                  altText={currentVariant.title || currentProduct.title}
                />
              </div>
            </div>

            {/* Certification watermarks */}
            <div className="absolute bottom-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/90 backdrop-blur-sm border border-slate-200 text-[10px] font-bold text-slate-700 uppercase">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>PSQCA NFPA Approved</span>
            </div>
          </div>

          {/* Details & Specifications Column */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-slate-900">
                {currentVariant.title || currentProduct.title}
              </h3>
              <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
                {currentVariant.desc || currentProduct.desc}
              </p>
            </div>

            {/* Variant / Capacity Selector */}
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Select {currentProduct.variantLabel}:
              </div>
              <div className="flex flex-wrap gap-2">
                {currentProduct.variants.map((v) => {
                  const isVarActive = v.size === activeVariantSize;
                  return (
                    <button
                      key={v.size}
                      onClick={() => setActiveVariantSize(v.size)}
                      className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                        isVarActive
                          ? 'bg-red-600 text-white shadow-md'
                          : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                      }`}
                    >
                      {v.size}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Technical Specifications Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3 pt-2">
              {currentProduct.specs.map(([label, val], idx) => (
                <div key={label} className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  {getSpecIcon(idx)}
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    {label}
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900 mt-0.5">
                    {val}
                  </div>
                </div>
              ))}
            </div>

            {/* Transparent Pricing Notice */}
            <div className="p-3.5 rounded-xl bg-slate-100/80 border border-slate-200 text-xs text-slate-600 flex items-center gap-2.5">
              <Info className="w-4 h-4 text-slate-500 shrink-0" />
              <span>
                Pricing varies according to required cylinder volume, mounting requirements, and
                annual maintenance schedule. Instant quote provided within hours.
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href={waUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white gradient-crimson rounded-xl shadow-elegant hover:opacity-95 transition-all active:scale-95 text-center"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span>WhatsApp for Pricing & Availability</span>
              </a>

              <a
                href="#quote"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-bold text-slate-800 bg-white hover:bg-slate-50 border-2 border-slate-800 rounded-xl transition-all active:scale-95 text-center"
              >
                <Mail className="w-4 h-4 shrink-0" />
                <span>Get Formal Written Quotation</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
