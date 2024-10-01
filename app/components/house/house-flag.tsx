import React, { useEffect, useState } from 'react';

import HouseBanner from './house-banner';

type House = {
  house: string;
  emoji: string;
  founder: string;
  colors: string[];
  animal: string;
};

export function HouseFlag(): JSX.Element {
  const [houses, setHouses] = useState<House[]>([]);
  const [selectedHouse, setSelectedHouse] = useState<House | null>(null); // Estado para la casa seleccionada

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

    fetchHouses();
  }, []);

  const houseColors = {
    Gryffindor: '#740001',
    Ravenclaw: '#0e1a40',
    Hufflepuff: '#ecb939',
    Slytherin: '#1a472a',
  };

  const handleCardClick = (house: House) => {
    setSelectedHouse(house);
  };

  return (
    <div className="text-white py-10 overflow-hidden">
      <div className="relative flex justify-center items-center bg-gray-700 h-full z-20 rounded-b-xl">
        {selectedHouse ? (
          <div className="relative bg-cover bg-center text-center text-white p-2 m-2 rounded-xl shadow-lg">
            <h6 className="flex flex-col justify-center items-center daily-prophet-bg im-fell-english p-4 rounded-md">
              <p className="font-bold text-3xl">
                {selectedHouse.house} {selectedHouse.emoji}
              </p>
              <p className="text-lg">
                <strong>Fundador:</strong> {selectedHouse.founder}
              </p>
              <p className="text-lg">
                <strong>Animal:</strong> {selectedHouse.animal}
              </p>
              <p className="text-lg">
                <strong>Colores:</strong> {selectedHouse.colors.join(', ')}
              </p>
            </h6>

            <div
              className="absolute top-0 left-0 w-12 h-12 rounded-br-full opacity-95"
              style={{
                backgroundColor:
                  houseColors[selectedHouse.house as keyof typeof houseColors],
              }}
            ></div>
            <div
              className="absolute top-0 right-0 w-12 h-12 rounded-bl-full opacity-95"
              style={{
                backgroundColor:
                  houseColors[selectedHouse.house as keyof typeof houseColors],
              }}
            ></div>
            <div
              className="absolute bottom-0 left-0 w-12 h-12 rounded-tr-full opacity-95"
              style={{
                backgroundColor:
                  houseColors[selectedHouse.house as keyof typeof houseColors],
              }}
            ></div>
            <div
              className="absolute bottom-0 right-0 w-12 h-12 rounded-tl-full opacity-95"
              style={{
                backgroundColor:
                  houseColors[selectedHouse.house as keyof typeof houseColors],
              }}
            ></div>
          </div>
        ) : (
          <h6 className="flex flex-col justify-center items-center  text-white bg-indigo-800 px-4 py-1 m-4 rounded-lg text-lg">
            Please Selected Your House
          </h6>
        )}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 md:gap-8 md:grid-cols-4 justify-center -mt-4 z-10 relative ">
        {houses.length > 0 ? (
          houses.map((house) => (
            <div key={house.house} onClick={() => handleCardClick(house)}>
              <HouseBanner
                key={house.house}
                name={house.house}
                logoSrc={`/img/${house.house.toLowerCase()}.png`} // Asumiendo que los logos están nombrados por casa
                color={houseColors[house.house as keyof typeof houseColors]}
              />
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}
