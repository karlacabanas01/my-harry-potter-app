'use client';
import React, { useEffect, useState } from 'react';
import HouseBanner from './house-banner';
import { IoMdClose } from 'react-icons/io'; // Para cerrar la ficha

type House = {
  house: string;
  emoji: string;
  founder: string;
  colors: string[];
  animal: string;
};

const houseColors: Record<string, string> = {
  Gryffindor: '#740001',
  Ravenclaw: '#0e1a40',
  Hufflepuff: '#ecb939',
  Slytherin: '#1a472a',
};

export default function HouseFlag(): JSX.Element {
  const [houses, setHouses] = useState<House[]>([]);
  const [selectedHouse, setSelectedHouse] = useState<House | null>(null);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const fetchHouses = async () => {
      try {
        const response = await fetch(
          'https://potterapi-fedeperin.vercel.app/es/houses',
        );
        const data: House[] = await response.json();
        setHouses(data);
      } catch (error) {
        console.error('Error fetching houses:', error);
      }
    };
    void fetchHouses();
  }, []);

  const handleCardClick = (house: House) => {
    if (selectedHouse?.house === house.house) {
      closeCard();
      return;
    }
    setSelectedHouse(house);
    setIsExiting(false);
  };

  const closeCard = () => {
    setIsExiting(true);
    setTimeout(() => {
      setSelectedHouse(null);
      setIsExiting(false);
    }, 400);
  };

  return (
    <div className="w-full max-w-5xl mx-auto py-12 px-4 space-y-12">
      <div className="min-h-[250px] flex items-center justify-center relative">
        {selectedHouse ? (
          <div
            className={`
              relative w-full max-w-2xl overflow-hidden
              bg-[#121212]/80 backdrop-blur-md border-t-2 border-b-2
              shadow-[0_0_50px_rgba(0,0,0,0.5)] p-8 rounded-3xl
              transition-all duration-500 ease-out transform
              ${isExiting ? 'opacity-0 scale-95 translate-y-4' : 'opacity-100 scale-100 translate-y-0'}
            `}
            style={{ borderColor: houseColors[selectedHouse.house] + '66' }}
          >
            <button
              onClick={closeCard}
              className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
            >
              <IoMdClose size={24} />
            </button>

            <div className="flex flex-col md:flex-row items-center gap-8">
              <div
                className="text-7xl p-6 rounded-full bg-white/5 animate-pulse"
                style={{
                  textShadow: `0 0 20px ${houseColors[selectedHouse.house]}`,
                }}
              >
                {selectedHouse.emoji}
              </div>

              <div className="flex-1 text-center md:text-left space-y-4">
                <h3
                  className="text-4xl md:text-5xl font-magic im-fell-english tracking-tighter"
                  style={{
                    color:
                      houseColors[selectedHouse.house] === '#ecb939'
                        ? '#ecb939'
                        : '#e2d1c3',
                  }}
                >
                  {selectedHouse.house}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-book">
                  <p className="bg-white/5 p-3 rounded-lg border border-white/10">
                    <strong className="block text-[#ffd700] uppercase text-[10px] tracking-widest mb-1">
                      Founder
                    </strong>
                    <span className="text-lg italic">
                      {selectedHouse.founder}
                    </span>
                  </p>
                  <p className="bg-white/5 p-3 rounded-lg border border-white/10">
                    <strong className="block text-[#ffd700] uppercase text-[10px] tracking-widest mb-1">
                      Animal
                    </strong>
                    <span className="text-lg italic">
                      {selectedHouse.animal}
                    </span>
                  </p>
                </div>

                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <span className="text-[10px] uppercase tracking-widest text-gray-500">
                    House Colors:
                  </span>
                  {selectedHouse.colors.map((color) => (
                    <div
                      key={color}
                      className="w-3 h-3 rounded-full border border-white/20"
                      style={{
                        backgroundColor: houseColors[selectedHouse.house],
                      }}
                    />
                  ))}
                  <span className="text-xs italic text-gray-400">
                    {selectedHouse.colors.join(' & ')}
                  </span>
                </div>
              </div>
            </div>

            <div
              className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 rounded-tl-3xl opacity-30"
              style={{ borderColor: houseColors[selectedHouse.house] }}
            />
            <div
              className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 rounded-br-3xl opacity-30"
              style={{ borderColor: houseColors[selectedHouse.house] }}
            />
          </div>
        ) : (
          <div className="text-center animate-bounce">
            <p className="font-magic text-2xl text-[#ffd700]/40 tracking-widest">
              Tap a banner to reveal its secrets
            </p>
            <div className="mt-4 text-4xl opacity-20">✨</div>
          </div>
        )}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
        {houses.length > 0 ? (
          houses.map((house) => (
            <button
              key={house.house}
              onClick={() => handleCardClick(house)}
              className="
                group relative flex flex-col items-center transition-all duration-300
                hover:scale-110 active:scale-95
              "
            >
              <div
                className="absolute inset-0 blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 rounded-full"
                style={{ backgroundColor: houseColors[house.house] }}
              />

              <div className="relative z-10 w-full transform transition-transform group-hover:-translate-y-2">
                <HouseBanner
                  name={house.house}
                  logoSrc={`/img/${house.house.toLowerCase()}.png`}
                  color={houseColors[house.house]}
                />
              </div>

              <span className="mt-4 font-magic text-[10px] tracking-[0.3em] uppercase text-gray-500 group-hover:text-[#ffd700] transition-colors">
                {house.house}
              </span>
            </button>
          ))
        ) : (
          <div className="col-span-full text-center py-10">
            <div className="animate-spin inline-block w-8 h-8 border-4 border-[#ffd700]/20 border-t-[#ffd700] rounded-full" />
          </div>
        )}
      </div>
    </div>
  );
}
