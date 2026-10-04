import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'FireProtectSafety | Certified Fire Safety & Fire Suppression Systems',
  description:
    'FireProtectSafety - Certified fire safety, fire extinguishers & suppression systems supplier, installer, and maintenance across Karachi, Pakistan.',
  openGraph: {
    title: 'FireProtectSafety | Certified Fire Safety & Fire Suppression Systems',
    description:
      'FireProtectSafety - Certified fire safety, fire extinguishers & suppression systems supplier, installer, and maintenance across Karachi, Pakistan.',
    type: 'website',
  },
  icons: {
    icon: '/Logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased bg-white text-slate-900">
        {children}
      </body>
    </html>
  );
}
