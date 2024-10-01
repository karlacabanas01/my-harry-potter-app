'use client';
import { useRouter } from 'next/navigation';
import { AiOutlineClose } from 'react-icons/ai';
import { BsCalendarDate } from 'react-icons/bs';
import { FaHouseChimney } from 'react-icons/fa6';
import { LuWand } from 'react-icons/lu';

import { capitalizeFirstLetter, formatDateOfBirth } from '../../utils/format';
import { Character } from '../../utils/types';
import IconButton from '../button/button-icon';

import '../card/card.css';
import Image from 'next/image';

interface Props {
  character: Character;
  onClose: () => void;
}
export default function CharacterModal({ character, onClose }: Props) {
  const router = useRouter();

  const handleClose = () => {
    if (onClose) {
      onClose();
    } else {
      router.push('/');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-transparent text-white flex items-center justify-center avellana">
        {character && (
          <div className="nft-card p-4 mb-2">
            <div className="flex justify-end">
              <IconButton
                onClick={handleClose}
                icon={<AiOutlineClose />}
                className="text-white hover:text-gray-400 transition-colors duration-150"
              />
            </div>
            <div className="flex justify-center items-center">
              <Image
                className="tokenImage rounded-lg shadow-xl"
                src={character.attributes.image}
                alt={character.attributes.name}
                width={200}
                height={200}
              />
            </div>
            <h2 className="text-md mt-4 cinzel-title">
              {character.attributes.name}
            </h2>
            <p className="description">
              {character.attributes.alias_names.join(', ')}
            </p>
            <div className="tokenInfo flex items-center mt-8 space-x-4">
              <div className="price flex items-center font-bold p-4 ">
                <FaHouseChimney className="text-lg" />
                <p className="ml-2">
                  {capitalizeFirstLetter(character.attributes.house) ||
                    'No hay datos'}
                </p>
              </div>

              <div className="duration flex items-center">
                <BsCalendarDate className="text-lg" />
                <p className="ml-2 whitespace-nowrap">
                  {formatDateOfBirth(character.attributes.died) ||
                    'No hay datos'}
                </p>
              </div>
            </div>

            <div className="flex justify-center items-center mt-4">
              <div className="flex items-center font-bold">
                <LuWand />
                <p className="ml-2">
                  Patronus:{' '}
                  {capitalizeFirstLetter(character.attributes.patronus) ||
                    'No se encuentra'}
                </p>
              </div>
            </div>
            <hr className="my-4" />
            <div className="creator flex flex-col items-center justify-start description">
              <p className="text-lg">
                {character.attributes.wands
                  ? `${capitalizeFirstLetter(character.attributes.wands[0])}.`
                  : 'Datos de varita no encontrados.'}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
