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
      <div className="relative flex justify-center items-center bg-gray-800 h-full z-20 rounded-b-xl">
        {selectedHouse ? (
          <h6 className="flex flex-col justify-center items-center text-gray-300 bg-black bg-opacity-40 px-4 py-1 m-4 rounded-lg text-lg">
            <p className="text-2xl font-bold">
              {selectedHouse.house} {selectedHouse.emoji}
            </p>
            <p>
              <strong>Fundador:</strong> {selectedHouse.founder}
            </p>
            <p>
              <strong>Animal:</strong> {selectedHouse.animal}
            </p>
            <p>
              <strong>Colores:</strong> {selectedHouse.colors.join(', ')}
            </p>
          </h6>
        ) : (
          <h6 className="flex flex-col justify-center items-center  text-white bg-indigo-800 px-4 py-1 m-4 rounded-lg text-lg">
            Please Selected Your House
          </h6>
        )}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 md:gap-8 md:grid-cols-4 justify-center -mt-4 z-10 relative ">
        {houses.length > 0 ? (
          houses.map((house, index) => (
            <div key={index} onClick={() => handleCardClick(house)}>
              <HouseBanner
                key={index}
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
