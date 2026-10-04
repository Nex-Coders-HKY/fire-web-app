import React, { useState, useEffect } from 'react';

interface ProductVisualProps {
  category: string;
  variantSize?: string;
  color?: string;
  imageUrl?: string;
  altText: string;
}

export const ProductVisual: React.FC<ProductVisualProps> = ({
  category,
  variantSize = '',
  color = '#c51b24',
  imageUrl,
  altText,
}) => {
  const [imgError, setImgError] = useState(false);

  // Reset error when imageUrl changes
  useEffect(() => {
    setImgError(false);
  }, [imageUrl, variantSize]);

  // If image URL is provided and has not errored, attempt loading with graceful fallback
  if (imageUrl && !imgError) {
    return (
      <div className="relative w-full h-full flex items-center justify-center p-4 group">
        <img
          src={imageUrl}
          alt={altText}
          onError={() => setImgError(true)}
          referrerPolicy="no-referrer"
          className="max-h-64 md:max-h-80 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-md rounded-lg"
        />
      </div>
    );
  }

  // Vector graphics fallback tailored for each fire equipment system
  const renderGraphic = () => {
    switch (category) {
      case 'CO2':
        return (
          <svg viewBox="0 0 200 320" className="h-64 md:h-76 w-auto drop-shadow-xl" fill="none">
            <defs>
              <linearGradient id="co2Body" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#1e242b" />
                <stop offset="50%" stopColor="#374151" />
                <stop offset="100%" stopColor="#111827" />
              </linearGradient>
              <linearGradient id="brassValve" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#d97706" />
                <stop offset="50%" stopColor="#fef08a" />
                <stop offset="100%" stopColor="#b45309" />
              </linearGradient>
            </defs>
            <rect x="65" y="80" width="70" height="190" rx="35" fill="url(#co2Body)" />
            <path d="M60 260 H140 V275 C140 282 134 286 128 286 H72 C66 286 60 282 60 275 Z" fill="#0f172a" />
            <rect x="88" y="66" width="24" height="18" rx="3" fill="#475569" />
            <path d="M84 46 H116 V66 H84 Z" fill="url(#brassValve)" />
            <rect x="94" y="30" width="12" height="18" fill="url(#brassValve)" />
            <path d="M80 44 C80 34 110 32 140 22 C142 21 146 25 142 30 C120 38 100 48 80 44 Z" fill="#dc2626" />
            <path d="M84 56 C96 66 120 74 140 70" stroke="#dc2626" strokeWidth="8" strokeLinecap="round" />
            <circle cx="106" cy="48" r="8" stroke="#facc15" strokeWidth="3" fill="none" />
            <path d="M84 56 C60 56 46 80 46 120 C46 160 52 190 52 210" stroke="#1f2937" strokeWidth="10" strokeLinecap="round" />
            <path d="M42 200 L62 200 L76 270 L28 270 Z" fill="#111827" stroke="#374151" strokeWidth="2" />
            <rect x="66" y="130" width="68" height="60" fill="#ffffff" rx="4" />
            <rect x="66" y="130" width="68" height="16" fill="#1e242b" rx="2" />
            <text x="100" y="142" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">CARBON DIOXIDE</text>
            <text x="100" y="160" textAnchor="middle" fill="#0f172a" fontSize="13" fontWeight="bold">CO₂</text>
            <text x="100" y="174" textAnchor="middle" fill="#2563eb" fontSize="8" fontWeight="bold">CLASS B · ELECTRICAL</text>
            <text x="100" y="185" textAnchor="middle" fill="#64748b" fontSize="7">{variantSize || '5 KG'}</text>
          </svg>
        );

      case 'Alarm':
        return (
          <svg viewBox="0 0 300 240" className="h-60 md:h-72 w-auto drop-shadow-xl" fill="none">
            <defs>
              <linearGradient id="panelBg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f8fafc" />
                <stop offset="100%" stopColor="#e2e8f0" />
              </linearGradient>
            </defs>
            <rect x="40" y="20" width="220" height="200" rx="16" fill="url(#panelBg)" stroke="#cbd5e1" strokeWidth="3" />
            <rect x="52" y="32" width="196" height="40" rx="8" fill="#dc2626" />
            <text x="150" y="56" textAnchor="middle" fill="#ffffff" fontSize="15" fontWeight="bold" letterSpacing="1">FIRE ALARM SYSTEM</text>
            <rect x="56" y="84" width="120" height="64" rx="6" fill="#064e3b" stroke="#047857" strokeWidth="2" />
            <text x="64" y="104" fill="#34d399" fontSize="10" fontFamily="monospace">SYSTEM NORMAL</text>
            <text x="64" y="120" fill="#34d399" fontSize="9" fontFamily="monospace">ZONE 01: READY</text>
            <text x="64" y="134" fill="#34d399" fontSize="9" fontFamily="monospace">AC POWER: OK</text>
            <g transform="translate(190, 84)">
              <circle cx="8" cy="8" r="5" fill="#22c55e" />
              <text x="20" y="12" fill="#475569" fontSize="8" fontWeight="bold">PWR</text>
              <circle cx="8" cy="26" r="5" fill="#ef4444" />
              <text x="20" y="30" fill="#475569" fontSize="8" fontWeight="bold">ALARM</text>
              <circle cx="8" cy="44" r="5" fill="#f59e0b" />
              <text x="20" y="48" fill="#475569" fontSize="8" fontWeight="bold">FAULT</text>
              <circle cx="8" cy="62" r="5" fill="#3b82f6" />
              <text x="20" y="66" fill="#475569" fontSize="8" fontWeight="bold">ISOL</text>
            </g>
            <g transform="translate(56, 160)">
              <rect x="0" y="0" width="36" height="22" rx="4" fill="#dc2626" />
              <text x="18" y="15" textAnchor="middle" fill="#ffffff" fontSize="8" fontWeight="bold">SILENCE</text>
              <rect x="42" y="0" width="36" height="22" rx="4" fill="#0284c7" />
              <text x="60" y="15" textAnchor="middle" fill="#ffffff" fontSize="8" fontWeight="bold">RESET</text>
              <rect x="84" y="0" width="36" height="22" rx="4" fill="#475569" />
              <text x="102" y="15" textAnchor="middle" fill="#ffffff" fontSize="8" fontWeight="bold">EVAC</text>
              <circle cx="150" cy="11" r="10" fill="#cbd5e1" stroke="#64748b" strokeWidth="2" />
              <rect x="148" y="6" width="4" height="10" fill="#334155" />
            </g>
          </svg>
        );

      case 'Suppression':
        return (
          <svg viewBox="0 0 280 260" className="h-60 md:h-72 w-auto drop-shadow-xl" fill="none">
            <defs>
              <linearGradient id="supCylinder" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#991b1b" />
                <stop offset="50%" stopColor="#ef4444" />
                <stop offset="100%" stopColor="#7f1d1d" />
              </linearGradient>
            </defs>
            <rect x="80" y="70" width="120" height="160" rx="30" fill="url(#supCylinder)" stroke="#b91c1c" strokeWidth="2" />
            <rect x="125" y="36" width="30" height="34" rx="4" fill="#64748b" />
            <path d="M120 40 H160 V54 H120 Z" fill="#cbd5e1" />
            <circle cx="140" cy="30" r="10" fill="#facc15" />
            <path d="M140 48 H220 V120" stroke="#94a3b8" strokeWidth="12" strokeLinecap="round" />
            <circle cx="220" cy="120" r="12" fill="#475569" />
            <circle cx="95" cy="50" r="14" fill="#ffffff" stroke="#334155" strokeWidth="3" />
            <path d="M95 50 L102 44" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" />
            <rect x="180" y="36" width="24" height="24" rx="3" fill="#0284c7" />
            <rect x="94" y="110" width="92" height="60" rx="6" fill="#ffffff" />
            <rect x="94" y="110" width="92" height="16" rx="4" fill="#0f172a" />
            <text x="140" y="122" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">FM-200 / SUPPRESSION</text>
            <text x="140" y="142" textAnchor="middle" fill="#dc2626" fontSize="11" fontWeight="bold">AUTOMATIC</text>
            <text x="140" y="156" textAnchor="middle" fill="#475569" fontSize="8">NFPA 2001 STANDARD</text>
          </svg>
        );

      case 'Hydrant':
        return (
          <svg viewBox="0 0 240 280" className="h-60 md:h-72 w-auto drop-shadow-xl" fill="none">
            <defs>
              <linearGradient id="hydrantRed" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#991b1b" />
                <stop offset="40%" stopColor="#dc2626" />
                <stop offset="100%" stopColor="#7f1d1d" />
              </linearGradient>
            </defs>
            <rect x="50" y="240" width="140" height="24" rx="4" fill="#1e293b" />
            <circle cx="70" cy="252" r="4" fill="#64748b" />
            <circle cx="170" cy="252" r="4" fill="#64748b" />
            <rect x="85" y="70" width="70" height="170" fill="url(#hydrantRed)" />
            <path d="M85 70 C85 30 155 30 155 70 Z" fill="url(#hydrantRed)" />
            <polygon points="120,12 135,22 135,34 105,34 105,22" fill="#d97706" stroke="#b45309" strokeWidth="2" />
            <rect x="44" y="110" width="42" height="34" rx="4" fill="#475569" />
            <circle cx="44" cy="127" r="16" fill="#cbd5e1" stroke="#334155" strokeWidth="3" />
            <path d="M44 143 C54 170 74 170 85 140" stroke="#f59e0b" strokeWidth="3" fill="none" strokeDasharray="3 3" />
            <rect x="154" y="110" width="42" height="34" rx="4" fill="#475569" />
            <circle cx="196" cy="127" r="16" fill="#cbd5e1" stroke="#334155" strokeWidth="3" />
            <path d="M196 143 C186 170 166 170 155 140" stroke="#f59e0b" strokeWidth="3" fill="none" strokeDasharray="3 3" />
            <circle cx="120" cy="170" r="22" fill="#cbd5e1" stroke="#334155" strokeWidth="4" />
            <circle cx="120" cy="170" r="14" fill="#94a3b8" />
            <rect x="110" y="166" width="20" height="8" rx="2" fill="#475569" />
          </svg>
        );

      case 'Materials':
        return (
          <svg viewBox="0 0 260 240" className="h-56 md:h-64 w-auto drop-shadow-xl" fill="none">
            <rect x="40" y="40" width="80" height="140" rx="8" fill="#dc2626" stroke="#991b1b" strokeWidth="2" />
            <text x="80" y="80" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold">FIRE</text>
            <text x="80" y="96" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold">BLANKET</text>
            <path d="M64 165 L64 195 M96 165 L96 195" stroke="#ffffff" strokeWidth="8" strokeLinecap="round" />
            <polygon points="170,50 190,50 200,120 160,120" fill="#d97706" stroke="#b45309" strokeWidth="2" />
            <rect x="155" y="120" width="50" height="20" rx="4" fill="#78350f" />
            <rect x="135" y="155" width="100" height="50" rx="6" fill="#15803d" stroke="#22c55e" strokeWidth="3" />
            <text x="185" y="186" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="bold" letterSpacing="1">EXIT ➔</text>
          </svg>
        );

      default:
        const cylinderColor = color || '#c51b24';
        return (
          <svg viewBox="0 0 200 320" className="h-64 md:h-76 w-auto drop-shadow-xl" fill="none">
            <defs>
              <linearGradient id="cylRed" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#991b1b" />
                <stop offset="45%" stopColor="#dc2626" />
                <stop offset="100%" stopColor="#7f1d1d" />
              </linearGradient>
            </defs>
            <rect x="62" y="260" width="76" height="24" rx="6" fill="#0f172a" />
            <rect x="65" y="75" width="70" height="190" rx="35" fill="url(#cylRed)" />
            <rect x="88" y="60" width="24" height="18" rx="2" fill="#334155" />
            <polygon points="90,44 110,44 114,60 86,60" fill="#94a3b8" />
            <circle cx="100" cy="52" r="10" fill="#ffffff" stroke="#1e293b" strokeWidth="2" />
            <path d="M96 50 C96 46 104 46 104 50" stroke="#22c55e" strokeWidth="2" fill="none" />
            <line x1="100" y1="52" x2="101" y2="47" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" />
            <path d="M78 40 C78 28 108 26 138 18 C140 17 144 21 140 25 C118 32 98 42 78 40 Z" fill="#0f172a" />
            <path d="M82 52 C94 62 118 68 138 64" stroke="#0f172a" strokeWidth="7" strokeLinecap="round" />
            <circle cx="106" cy="42" r="7" stroke="#eab308" strokeWidth="3" fill="none" />
            <rect x="104" y="44" width="4" height="12" fill="#ef4444" rx="1" />
            <path d="M86 64 C64 64 50 85 50 130 C50 175 56 220 56 245" stroke="#1e293b" strokeWidth="9" strokeLinecap="round" />
            <rect x="50" y="235" width="12" height="30" rx="3" fill="#334155" />
            <rect x="66" y="125" width="68" height="74" fill="#ffffff" rx="4" />
            <rect x="66" y="125" width="68" height="18" fill={cylinderColor} rx="2" />
            <text x="100" y="137" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">
              {category.toUpperCase()}
            </text>
            <text x="100" y="156" textAnchor="middle" fill="#0f172a" fontSize="12" fontWeight="bold">
              {variantSize || '6 KG'}
            </text>
            <text x="100" y="172" textAnchor="middle" fill="#475569" fontSize="8" fontWeight="bold">
              PSQCA CERTIFIED
            </text>
            <circle cx="85" cy="186" r="5" fill="#2563eb" />
            <circle cx="100" cy="186" r="5" fill="#d97706" />
            <circle cx="115" cy="186" r="5" fill="#1e293b" />
          </svg>
        );
    }
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center p-4">
      {renderGraphic()}
    </div>
  );
};
