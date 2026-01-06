'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Loading() {
  const [loadingText, setLoadingText] = useState('Revealing secrets...');

  useEffect(() => {
    const phrases = [
      'I solemnly swear that I am up to no good...',
      'Banishing Nargles...',
      "Consulting the Marauder's Map...",
      'Watch out for Mrs. Norris...',
      'Opening the Chamber of Secrets...',
      'Mischief Managed...',
    ];
    setLoadingText(phrases[Math.floor(Math.random() * phrases.length)]);
  }, []);

  return (
    <div
      className="fixed inset-0 h-screen w-screen flex flex-col items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(/img/bg.jpg)',
        backgroundColor: '#f5deb3',
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(35,25,15,0.8)_100%)] pointer-events-none z-0" />

      <div className="relative z-10 flex flex-col items-center justify-center gap-6 p-4">
        <div className="relative h-24 w-24 flex items-center justify-center">
          <Image
            src="/img/pies.gif"
            alt="Magic Footprint"
            width={80}
            height={80}
            className="opacity-70 mix-blend-multiply transform rotate-[-45deg] animate-pulse"
          />
        </div>

        <div className="text-center z-20 max-w-md">
          <h1 className="text-2xl md:text-4xl font-bold tracking-[0.2em] text-[#4a3b2a] drop-shadow-sm font-serif italic animate-pulse">
            {loadingText}
          </h1>
        </div>
      </div>
    </div>
  );
}
