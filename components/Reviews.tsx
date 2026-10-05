'use client';

import React, { useRef } from 'react';
import { Star, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { reviewsData } from '../data/reviews';

export const Reviews: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (dir: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmt = 340;
      scrollRef.current.scrollBy({
        left: dir === 'left' ? -scrollAmt : scrollAmt,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="reviews" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-widest text-red-600 mb-2">
              Verified Client Feedback
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-slate-900 leading-tight">
              Trusted by Karachi's Leading Enterprises
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600">
              Real testimonials from plant directors, facility administrators, and safety engineers
              responsible for thousands of workers every day.
            </p>
          </div>

          {/* Rating Summary Badge */}
          <div className="flex items-center gap-4 bg-slate-50 border border-slate-200 px-5 py-3 rounded-2xl shadow-sm self-start md:self-end">
            <div className="font-display font-extrabold text-3xl text-red-600">4.9</div>
            <div>
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="text-xs text-slate-500 font-medium mt-0.5">
                Based on 120+ client audits & reviews
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Navigation Buttons */}
        <div className="mt-8 flex justify-end gap-2">
          <button
            onClick={() => handleScroll('left')}
            className="p-2.5 rounded-full border border-slate-300 hover:border-red-600 text-slate-700 hover:text-red-600 hover:bg-red-50 transition-all active:scale-95"
            aria-label="Scroll Reviews Left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => handleScroll('right')}
            className="p-2.5 rounded-full border border-slate-300 hover:border-red-600 text-slate-700 hover:text-red-600 hover:bg-red-50 transition-all active:scale-95"
            aria-label="Scroll Reviews Right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Reviews Cards Scroll Container */}
        <div
          ref={scrollRef}
          className="mt-4 flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory custom-scrollbar scroll-smooth"
        >
          {reviewsData.map((rev) => (
            <div
              key={rev.id}
              className="min-w-[290px] sm:min-w-[340px] max-w-[360px] flex-shrink-0 snap-start bg-slate-50/70 border border-slate-200/90 rounded-2xl p-6 shadow-sm hover:shadow-card transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full gradient-crimson text-white font-display font-bold flex items-center justify-center text-sm shadow-sm shrink-0">
                    {rev.initials}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-slate-900 text-sm sm:text-base leading-snug">
                      {rev.name}
                    </h3>
                    <p className="text-xs text-slate-500">{rev.role}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-amber-500 my-3">
                  {[...Array(rev.stars)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "{rev.text}"
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/60 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                {rev.date}
              </div>
            </div>
          ))}
        </div>

        {/* Add a Review Box */}
        <div className="mt-10 rounded-2xl border border-dashed border-red-300 bg-red-50/50 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="font-display font-bold text-slate-900 text-base sm:text-lg">
              Have you worked with SafetyPro Fire Systems?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Share your feedback — it helps Karachi businesses choose certified safety partners.
            </p>
          </div>
          <a
            href="https://wa.me/923452072882?text=Hi%2C%20I%27d%20like%20to%20share%20a%20review%20of%20my%20experience%20with%20SafetyPro%20Fire%20Systems%3A%0A%0ARating%20(1-5%20stars)%3A%20%0AMy%20review%3A%20"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-bold text-white gradient-crimson rounded-xl shadow-elegant hover:opacity-95 whitespace-nowrap transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Add a Review on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
