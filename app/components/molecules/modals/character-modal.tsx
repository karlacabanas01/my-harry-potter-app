'use client';
import {
  capitalizeFirstLetter,
  Character,
  formatDateOfBirth,
} from '@/app/utils';
import Image from 'next/image';
import { AiOutlineClose } from 'react-icons/ai';
import { BsCalendarDate } from 'react-icons/bs';
import { FaHouseChimney } from 'react-icons/fa6';
import { LuWand } from 'react-icons/lu';
import { GiCrystalBall } from 'react-icons/gi';
import { IconButton } from '../../atoms/buttons';

interface Props {
  character: Character;
  onClose: () => void;
}

export default function CharacterModal({ character, onClose }: Props) {
  if (!character) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[100] p-4">
      {/* Contenedor Principal con efecto de cristal/oro */}
      <div className="relative bg-[#1a1a1a] border-2 border-[#ffd700]/30 rounded-3xl max-w-md w-full overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.9)] animate-in fade-in zoom-in duration-300">
        {/* Botón de cierre flotante */}
        <div className="absolute top-4 right-4 z-10">
          <IconButton
            onClick={onClose}
            icon={<AiOutlineClose size={24} />}
            className="text-[#ffd700]/60 hover:text-[#ffd700] bg-black/20 hover:bg-black/40 rounded-full p-2 transition-all"
          />
        </div>

        {/* Imagen con resplandor */}
        <div className="relative h-72 w-full bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] flex justify-center pt-8">
          <div className="relative w-48 h-64 shadow-2xl rounded-xl overflow-hidden border-4 border-[#ffd700]/20">
            <Image
              src={character.image}
              alt={character.name}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Contenido de la "Ficha Mágica" */}
        <div className="p-8 text-center">
          <h2 className="cinzel-title text-2xl font-bold text-[#ffd700] tracking-wider mb-2">
            {character.name}
          </h2>

          {character.alternate_names?.length > 0 && (
            <p className="text-gray-400 italic text-sm mb-6">
              "{character.alternate_names[0]}"
            </p>
          )}

          {/* Grid de Información Principal */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="flex flex-col items-center p-3 bg-white/5 rounded-2xl border border-white/10">
              <FaHouseChimney className="text-[#ffd700] text-xl mb-2" />
              <span className="text-[10px] uppercase tracking-tighter text-gray-500">
                House
              </span>
              <p className="text-sm font-semibold">
                {capitalizeFirstLetter(character.house) || 'Unknown'}
              </p>
            </div>
            <div className="flex flex-col items-center p-3 bg-white/5 rounded-2xl border border-white/10">
              <BsCalendarDate className="text-[#ffd700] text-xl mb-2" />
              <span className="text-[10px] uppercase tracking-tighter text-gray-500">
                Born
              </span>
              <p className="text-sm font-semibold">
                {formatDateOfBirth(character.dateOfBirth) || 'Ancient'}
              </p>
            </div>
          </div>

          {/* Sección de Magia Especializada */}
          <div className="space-y-4 border-t border-[#ffd700]/10 pt-6">
            <div className="flex items-center justify-center space-x-3 text-gray-200">
              <GiCrystalBall className="text-[#ffd700]" />
              <p className="text-sm">
                <span className="text-gray-500 mr-2 uppercase text-[10px] tracking-widest">
                  Patronus:
                </span>
                {capitalizeFirstLetter(character.patronus) || 'Non-corporeal'}
              </p>
            </div>

            <div className="flex items-center justify-center space-x-3 text-gray-200">
              <LuWand className="text-[#ffd700]" />
              <p className="text-sm italic">
                {character.wand?.wood
                  ? `${capitalizeFirstLetter(character.wand.wood)} wood, ${character.wand.core} core`
                  : 'Wand data remains hidden'}
              </p>
            </div>
          </div>
        </div>

        {/* Decoración Inferior */}
        <div className="h-2 bg-gradient-to-r from-transparent via-[#ffd700]/40 to-transparent w-full" />
      </div>
    </div>
  );
}
