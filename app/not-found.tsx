import Link from "next/link";
import { ShieldAlert, Home, PhoneCall, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-red-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-orange-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-xl w-full text-center relative z-10 bg-slate-900/80 backdrop-blur-md border border-slate-800 p-8 sm:p-12 rounded-3xl shadow-2xl space-y-6">
        
        {/* Animated Badge / Icon Container */}
        <div className="inline-flex items-center justify-center p-4 bg-red-500/10 border border-red-500/30 rounded-2xl text-red-500 mb-2 shadow-inner">
          <ShieldAlert className="w-16 h-16 animate-pulse" />
        </div>

        {/* 404 Title & Status */}
        <div className="space-y-2">
          <span className="text-sm font-semibold tracking-widest text-red-400 uppercase">
            Error 404 — Page Not Found
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Safety Hazard Alert!
          </h1>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Aap jis page ko dhoond rahe hain wo move ho chuka hai ya exist nahi karta. Safety zones ke andar rehne ke liye niche diye gaye links use karein.
          </p>
        </div>

        {/* Quick Action Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-500 hover:to-orange-400 text-white font-semibold px-6 py-3 rounded-xl transition-all shadow-lg shadow-red-600/25 active:scale-95"
          >
            <Home size={18} />
            Back to Home
          </Link>

          <a
            href="tel:+923452072882"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-semibold px-6 py-3 rounded-xl transition-all active:scale-95"
          >
            <PhoneCall size={18} className="text-red-400" />
            Emergency Call
          </a>
        </div>

        {/* Footer Note */}
        <div className="pt-6 border-t border-slate-800/80 text-xs text-slate-500">
          FireProtectSafety — Secure & Reliable Fire Protection Solutions
        </div>
      </div>
    </div>
  );
}