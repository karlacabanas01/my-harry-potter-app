'use client';
import { motion } from 'framer-motion';

interface MagicFlashProps {
  color: string;
}

export const MagicFlash = ({ color }: MagicFlashProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0, 0.5, 0],
        scale: [1, 1.1, 1],
      }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed inset-0 z-[200] pointer-events-none"
      style={{
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        mixBlendMode: 'screen',
      }}
    />
  );
};
