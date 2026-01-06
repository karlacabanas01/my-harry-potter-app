'use client';
import React, { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Section from '../section';
import { MagicFlash } from '../../atoms/magic-flash';
import { SpellCard } from '../card/spells-card';

export default function SpellsList({ id }: { id: string }) {
  const [spells, setSpells] = useState<any[]>([]);
  const [displaySpells, setDisplaySpells] = useState<any[]>([]);
  const [activeEffect, setActiveEffect] = useState<string | null>(null);

  useEffect(() => {
    const fetchSpells = async () => {
      try {
        const response = await fetch('https://api.potterdb.com/v1/spells');
        const data = await response.json();
        const allSpells = data.data;
        setSpells(allSpells);
        setDisplaySpells(
          [...allSpells].sort(() => 0.5 - Math.random()).slice(0, 2),
        );
      } catch (error) {
        console.error(error);
      }
    };
    fetchSpells();
  }, []);

  const triggerMagic = (color: string) => {
    setActiveEffect(color);
    setTimeout(() => setActiveEffect(null), 800);
  };

  const shuffle = () => {
    setDisplaySpells([...spells].sort(() => 0.5 - Math.random()).slice(0, 4));
  };

  return (
    <Section
      id={id}
      title="The Ancient Library"
      description="Cast spells by revealing the secret scrolls."
    >
      <div className="relative flex flex-col items-center w-full">
        <AnimatePresence>
          {activeEffect && <MagicFlash color={activeEffect} />}
        </AnimatePresence>

        {/* CAMBIO AQUÍ: Usamos flex para centrar dinámicamente */}
        <div className="flex flex-wrap justify-center gap-8 w-full max-w-6xl">
          {displaySpells.map((spell) => (
            <div
              key={spell.id}
              className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)] max-w-xs"
            >
              <SpellCard spell={spell} onCast={triggerMagic} />
            </div>
          ))}
        </div>

        <button
          onClick={shuffle}
          className="mt-12 font-magic text-xs tracking-[0.3em] text-[#ffd700]/40 hover:text-[#ffd700] transition-colors border-b border-[#ffd700]/10 pb-2"
        >
          Consult the Oracles (Shuffle)
        </button>
      </div>
    </Section>
  );
}
