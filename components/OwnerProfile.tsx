import Image from "next/image";
import { Mail, Phone, MapPin, MessageSquare, Award } from "lucide-react";

export default function OwnerProfile() {
  return (
    <section className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8 shadow-xl border-b border-slate-700">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left: Owner Image Container */}
        <div className="relative group flex-shrink-0">
          <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-orange-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
          <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden border-2 border-slate-700 bg-slate-800">
            {/* Owner Image */}
            <Image
              src="/images/image.jpeg" // Place your owner photo in public/images/
              alt="Owner Profile"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
              priority
            />
          </div>
        </div>

        {/* Right: Owner Details */}
        <div className="flex-1 text-center md:text-left space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-semibold uppercase tracking-wider">
            <Award size={14} /> Founder & Chief Executive
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Sohail Hussain
            </h2>
            <p className="text-red-400 font-medium text-sm sm:text-base">
              Fire Protection & Safety Equipment Specialist
            </p>
          </div>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
            Providing top-quality fire extinguishers, safety systems, and certified installation services across Karachi. Dedicated to safeguarding lives and property with reliable, industry-grade protection solutions.
          </p>

          {/* Quick Contact Badges */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2 text-sm text-slate-300">
            <a
              href="tel:+923452072882"
              className="flex items-center gap-2 hover:text-red-400 transition-colors"
            >
              <Phone size={16} className="text-red-500" />
              <span>+92 345 2072882</span>
            </a>

            <a
              href="mailto:contact@fireprotectsafety.com"
              className="flex items-center gap-2 hover:text-red-400 transition-colors"
            >
              <Mail size={16} className="text-red-500" />
              <span>fireprotectsafty@gmail.com</span>
            </a>

            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-red-500" />
              <span>Karachi, Pakistan</span>
            </div>
          </div>

          {/* CTA Action Buttons */}
          <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-3">
            <a
              href="https://wa.me/923452072882"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-medium px-4 py-2 rounded-lg text-sm transition-colors"
            >
              <MessageSquare size={16} /> Direct WhatsApp
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 border border-slate-600 text-white font-medium px-4 py-2 rounded-lg text-sm transition-colors"
            >
              Contact Owner
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}