'use client';

import React, { useState } from 'react';
import { Flame } from 'lucide-react';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = true,
}) => {
  const [imgError, setImgError] = useState(false);

  const dimensionClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
  };

  const titleSizes = {
    sm: 'text-base',
    md: 'text-lg md:text-xl',
    lg: 'text-2xl md:text-3xl',
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div
        className={`${dimensionClasses[size]} rounded-full overflow-hidden shrink-0 border-2 border-red-600/40 shadow-sm flex items-center justify-center bg-slate-900`}
      >
        {!imgError ? (
          <img
            src="images/Logo.png"
            alt="FireProtectSafety Logo"
            className="w-full h-full object-cover"
            onError={() => setImgError(true)}
            referrerPolicy="no-referrer"
          />
        ) : (
          <span className="w-full h-full gradient-crimson flex items-center justify-center text-white">
            <Flame className="w-5 h-5 fill-white/20" />
          </span>
        )}
      </div>

      <div className="flex flex-col">
        <span className={`font-display font-extrabold text-base sm:text-lg md:text-xl text-slate-900 leading-tight whitespace-nowrap`}>
          FireProtect<span className="text-red-600">Safety</span>
        </span>
        {showSubtitle && (
          <span className="hidden sm:inline-block text-[10px] text-slate-500 font-semibold tracking-wider uppercase whitespace-nowrap">
            Certified Fire Systems · Karachi
          </span>
        )}
      </div>
    </div>
  );
};
