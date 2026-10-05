'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall, ShieldCheck, ArrowRight, MessageCircle } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface NavbarProps {
  onOpenQuote?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on resize to desktop (xl breakpoint = 1280px)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close mobile menu on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    if (mobileMenuOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Guidance', href: '#guidance' },
    { label: 'Catalogue', href: '#catalogue' },
    { label: 'Refilling', href: '#refilling' },
    { label: 'Materials', href: '#materials' },
    { label: 'Projects', href: '#projects' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#quote' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 80);
      }
    }
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200'
            : 'bg-white/90 backdrop-blur-sm border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Brand Logo with Logo.png */}
            <a href="#" className="flex items-center group shrink-0">
              <BrandLogo size="md" />
            </a>

            {/* Desktop Navigation Links (>= xl: 1280px) */}
            <nav className="hidden xl:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-semibold text-slate-700 hover:text-red-600 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Header Action CTAs */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Emergency Call Button (Tablets & Desktop) */}
              <a
                href="tel:+923452072882"
                className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors shrink-0"
                title="24/7 Fire Safety Emergency Line"
              >
                <PhoneCall className="w-3.5 h-3.5 text-red-600 shrink-0" />
                <span>+92 345 2072882</span>
              </a>

              {/* Get Quote CTA */}
              <a
                href="#quote"
                onClick={onOpenQuote}
                className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-2 text-xs md:text-sm font-bold text-white gradient-crimson rounded-lg shadow-elegant hover:opacity-95 transition-all active:scale-95 whitespace-nowrap shrink-0"
              >
                <span>Get Quote</span>
                <ArrowRight className="w-3.5 h-3.5 shrink-0 hidden xs:inline-block sm:inline-block" />
              </a>

              {/* Mobile / Tablet Hamburger Toggle Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="xl:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-slate-50 border border-slate-200/80 text-slate-700 hover:bg-slate-100 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-500/20 active:scale-95 transition-all cursor-pointer shrink-0"
                aria-label="Open Navigation Menu"
                aria-expanded={mobileMenuOpen}
              >
                <Menu className="w-6 h-6 text-slate-800" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile & Tablet Full Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-0 z-50 flex flex-col">
          {/* Dark Backdrop */}
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity animate-in fade-in"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Sheet */}
          <div className="relative z-10 bg-white w-full max-h-[92vh] flex flex-col shadow-2xl border-b border-slate-200 animate-in slide-in-from-top duration-200">
            {/* Drawer Header */}
            <div className="flex items-center justify-between px-4 sm:px-6 h-16 sm:h-20 border-b border-slate-100 bg-white shrink-0">
              <BrandLogo size="md" />
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="w-10 h-10 rounded-full bg-slate-100 hover:bg-red-50 text-slate-700 hover:text-red-600 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close Navigation Menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Drawer Body */}
            <div className="overflow-y-auto px-4 sm:px-6 py-4 space-y-4">
              {/* Trust Badge */}
              <div className="flex items-center gap-2.5 p-3 bg-red-50 text-red-900 rounded-xl text-xs font-semibold border border-red-100">
                <ShieldCheck className="w-4 h-4 text-red-600 shrink-0" />
                <span>ISO 9001 · NFPA · PSQCA · Sindh Civil Defence Certified</span>
              </div>

              {/* Direct Phone & WhatsApp Action Bar */}
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="tel:+923452072882"
                  className="flex items-center justify-center gap-2 py-2.5 px-3 text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors active:scale-95"
                >
                  <PhoneCall className="w-4 h-4 text-red-600 shrink-0" />
                  <span>Call Emergency</span>
                </a>
                <a
                  href="https://wa.me/923452072882?text=Hi%20FireProtectSafety%2C%20I%20need%20a%20fire%20safety%20quote%20for%20our%20site."
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-3 text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 rounded-xl transition-colors border border-emerald-200/80 active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>WhatsApp Inquiry</span>
                </a>
              </div>

              {/* Navigation Links */}
              <nav className="divide-y divide-slate-100 rounded-2xl bg-slate-50 border border-slate-200/70 overflow-hidden">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => handleLinkClick(link.href)}
                    className="flex items-center justify-between px-4 py-3.5 text-sm font-semibold text-slate-800 hover:bg-white hover:text-red-600 transition-colors"
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                  </a>
                ))}
              </nav>

              {/* Request Custom Quote Full CTA */}
              <div className="pt-1 pb-2">
                <a
                  href="#quote"
                  onClick={() => handleLinkClick('#quote')}
                  className="flex items-center justify-center gap-2 w-full py-3.5 px-4 text-sm font-bold text-white gradient-crimson rounded-xl shadow-elegant hover:opacity-95 transition-all active:scale-[0.99]"
                >
                  <span>Request Custom Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
