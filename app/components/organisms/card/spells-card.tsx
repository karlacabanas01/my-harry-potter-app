'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

interface SpellCardProps {
  spell: any;
  onCast: (color: string) => void;
}

export const SpellCard = ({ spell, onCast }: SpellCardProps) => {
  const [isRevealed, setIsRevealed] = useState(false);

  const colors: Record<string, string> = {
    blue: '#3b82f6',
    red: '#ef4444',
    green: '#22c55e',
    yellow: '#eab308',
    white: '#ffffff',
    purple: '#a855f7',
  };

  const spellColor = colors[spell.attributes.light?.toLowerCase()] || '#ffd700';

  const handleReveal = () => {
    if (!isRevealed) {
      onCast(spellColor);
    }
    setIsRevealed(!isRevealed);
  };

  return (
    <div
      className="perspective-1000 w-full h-72 cursor-pointer"
      onClick={handleReveal}
    >
      <motion.div
        className="relative w-full h-full transition-all duration-700 preserve-3d"
        animate={{ rotateY: isRevealed ? 180 : 0 }}
      >
        {/* LADO A: Misterio */}
        <div className="absolute inset-0 backface-hidden glass-card flex flex-col items-center justify-center border-dashed border-[#ffd700]/20">
          <div className="text-4xl animate-pulse">📜</div>
          <p className="mt-4 font-magic text-[10px] tracking-widest text-[#ffd700]/40 uppercase">
            Revela el secreto
          </p>
        </div>

        {/* LADO B: Revelado */}
        <div
          className="absolute inset-0 backface-hidden rotate-y-180 glass-card p-6 flex flex-col items-center text-center justify-center border-[#ffd700]/40"
          style={{
            boxShadow: isRevealed ? `0 0 40px ${spellColor}44` : 'none',
          }}
        >
          <div
            className="absolute top-0 w-24 h-1 blur-md"
            style={{ backgroundColor: spellColor }}
          />
          <h3 className="text-2xl font-magic text-[#ffd700] mb-2 leading-tight">
            {spell.attributes.name}
          </h3>
          <p className="text-sm font-book italic text-[#e2d1c3]/70 leading-relaxed">
            "{spell.attributes.effect}"
          </p>
        </div>
      </motion.div>
    </div>
  );
};
