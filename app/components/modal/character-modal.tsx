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
                src={character.image}
                alt={character.name}
                width={200}
                height={200}
              />
            </div>
            <h2 className="text-md mt-4 cinzel-title">{character.name}</h2>
            <p className="description">
              {character.alternate_names.join(', ')}
            </p>
            <div className="tokenInfo flex items-center mt-8 space-x-4">
              <div className="price flex items-center font-bold p-4 ">
                <FaHouseChimney className="text-lg" />
                <p className="ml-2">
                  {capitalizeFirstLetter(character.house) || 'Not found'}
                </p>
              </div>

              <div className="duration flex items-center">
                <BsCalendarDate className="text-lg" />
                <p className="ml-2 whitespace-nowrap">
                  {formatDateOfBirth(character.dateOfBirth) || 'Not found'}
                </p>
              </div>
            </div>

            <div className="flex justify-center items-center mt-4">
              <div className="flex items-center font-bold">
                <LuWand />
                <p className="ml-2">
                  Patronus:{' '}
                  {capitalizeFirstLetter(character.patronus) || 'Not found'}
                </p>
              </div>
            </div>
            <hr className="my-4" />
            <div className="creator flex flex-col items-center justify-start description">
              <p className="text-lg">
                {character.wand
                  ? `${capitalizeFirstLetter(character.wand.wood)} ${capitalizeFirstLetter(character.wand.core)}.`
                  : 'No wand data found.'}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
