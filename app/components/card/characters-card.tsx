import React from 'react';
import './card.css';
import Image from 'next/image';
import { Character } from '@/app/utils/types';
import { BsCalendarDate } from 'react-icons/bs';
import { capitalizeFirstLetter, formatDateOfBirth } from '@/app/utils/format';
import { LuWand } from 'react-icons/lu';
import { FaHouseChimney } from 'react-icons/fa6';

interface Props {
  character: Character;
}
const CharactersCard = ({ character }: Props) => {
  return (
    <div className="bg-transparent text-white flex items-center justify-center">
      {character && (
        <div className="nft-card p-4 mb-2">
          <div className="flex justify-center items-center ">
            <Image
              className="tokenImage"
              src={character.image}
              alt={character.name}
              width={200}
              height={200}
            />
          </div>
          <h2 className="text-md mt-4 cinzel-title">{character.name}</h2>
          <p className="description">{character.alternate_names.join(', ')}</p>
          <div className="tokenInfo flex justify-between items-center mt-4">
            <div className="price flex items-center font-bold">
              <FaHouseChimney />
              <p className="ml-2">{character.house}</p>
            </div>
            <div className="duration flex items-center">
              <BsCalendarDate />
              <p className="ml-2">{formatDateOfBirth(character.dateOfBirth)}</p>
            </div>
          </div>
          <div className="flex justify-center items-center mt-4">
            <div className="flex items-center font-bold">
              <LuWand />
              <p className="ml-2">
                {capitalizeFirstLetter(character.patronus)}
              </p>
            </div>
          </div>
          <hr className="my-4" />
          <div className="creator flex flex-col items-center justify-start description">
            <p className="text-lg">
              {capitalizeFirstLetter(character.wand.wood)}, it is made of{' '}
              {character.wand.core}.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CharactersCard;
