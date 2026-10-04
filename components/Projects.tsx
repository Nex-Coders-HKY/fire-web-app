'use client';

import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Calendar, CheckCircle, ArrowRight } from 'lucide-react';
import { projectsData } from '../data/projects';

export const Projects: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Industrial', 'Corporate', 'Education', 'Commercial', 'DataCenter'];

  const filteredProjects =
    activeCategory === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 340;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="projects" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-widest text-red-600 mb-2">
              Verified Project Portfolio
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-slate-900">
              Recent Engineering & Installation Projects
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600">
              Completed installations across Karachi — protecting premier textile conglomerates,
              banking headquarters, commercial shopping plazas, and educational campuses.
            </p>
          </div>

          {/* Carousel Navigation Buttons */}
          <div className="flex items-center gap-2 self-start md:self-end">
            <button
              onClick={() => handleScroll('left')}
              className="p-2.5 rounded-full border border-slate-300 hover:border-red-600 text-slate-700 hover:text-red-600 hover:bg-red-50 transition-all active:scale-95"
              aria-label="Scroll Projects Left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleScroll('right')}
              className="p-2.5 rounded-full border border-slate-300 hover:border-red-600 text-slate-700 hover:text-red-600 hover:bg-red-50 transition-all active:scale-95"
              aria-label="Scroll Projects Right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Horizontal Scroll Area */}
        <div
          ref={scrollContainerRef}
          className="mt-8 flex gap-5 overflow-x-auto pb-6 snap-x snap-mandatory custom-scrollbar scroll-smooth"
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="min-w-[290px] sm:min-w-[340px] md:min-w-[370px] max-w-[370px] flex-shrink-0 snap-start rounded-2xl bg-white border border-slate-200 shadow-card hover:shadow-lift transition-all duration-300 flex flex-col overflow-hidden group"
            >
              {/* Project Image Banner */}
              <div className="relative h-48 overflow-hidden bg-slate-900">
                <img
                  src={project.imageUrl}
                  alt={project.client}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider rounded-md text-white gradient-crimson shadow-sm">
                    {project.tag}
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h3 className="font-display font-bold text-lg leading-snug drop-shadow-sm">
                    {project.client}
                  </h3>
                  <div className="flex items-center gap-3 text-xs text-slate-200 mt-1">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-red-400 shrink-0" />
                      {project.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-300 shrink-0" />
                      {project.date}
                    </span>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {project.desc}
                </p>

                {/* Project Specific Stats */}
                <div className="mt-5 pt-4 border-t border-slate-100 grid grid-cols-3 gap-2 text-center">
                  <div className="bg-slate-50 p-2 rounded-xl">
                    <div className="font-display font-bold text-red-600 text-base md:text-lg">
                      {project.stats.val1}
                    </div>
                    <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                      {project.stats.lbl1}
                    </div>
                  </div>
                  <div className="bg-slate-50 p-2 rounded-xl">
                    <div className="font-display font-bold text-slate-900 text-base md:text-lg">
                      {project.stats.val2}
                    </div>
                    <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                      {project.stats.lbl2}
                    </div>
                  </div>
                  <div className="bg-slate-50 p-2 rounded-xl">
                    <div className="font-display font-bold text-emerald-600 text-base md:text-lg">
                      {project.stats.val3}
                    </div>
                    <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                      {project.stats.lbl3}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll helper hint */}
        <div className="mt-3 flex items-center justify-center gap-2 text-xs font-semibold text-slate-400">
          <ArrowRight className="w-3.5 h-3.5" />
          <span>Swipe or click arrows to explore all projects</span>
        </div>
      </div>
    </section>
  );
};
