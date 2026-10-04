'use client';

import React from 'react';

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col items-center justify-center bg-slate-900 text-white p-6">
        <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
        <button
          onClick={() => reset()}
          className="rounded-lg bg-red-600 px-5 py-2.5 font-semibold text-white hover:bg-red-700 transition"
        >
          Try Again
        </button>
      </body>
    </html>
  );
}
