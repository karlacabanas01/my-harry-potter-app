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
  const [selectedHouse, setSelectedHouse] = useState<House | null>(null); // Casa seleccionada
  const [isExiting, setIsExiting] = useState(false); // Estado de salida para la animación

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
    // Si hay una casa seleccionada, aplicamos animación de salida
    if (selectedHouse) {
      setIsExiting(true); // Iniciar la animación de salida
      setTimeout(() => {
        setSelectedHouse(house); // Cambiar a la nueva casa
        setIsExiting(false); // Resetear la animación de salida
      }, 500); // La animación de salida dura 500ms
    } else {
      // Si no hay casa seleccionada, simplemente seleccionamos la casa
      setSelectedHouse(house);
    }
  };

  useEffect(() => {
    if (selectedHouse) {
      const timer = setTimeout(() => {
        setSelectedHouse(null); // Deselecciona después de 5 segundos
      }, 5000); // Deselecciona después de 5 segundos

      return () => clearTimeout(timer); // Limpiar el temporizador si cambia la casa
    }
  }, [selectedHouse]);

  return (
    <div className="text-white py-10 overflow-hidden w-2/3 mx-auto">
      <div className="relative flex justify-center items-center bg-gray-700 h-full z-20 rounded-b-xl">
        {selectedHouse ? (
          <div
            className={`relative bg-cover bg-center text-center text-white p-2 m-2 rounded-xl shadow-lg transform transition-all duration-500 ease-out ${
              isExiting
                ? 'opacity-0 translate-y-8'
                : 'opacity-100 translate-y-0'
            }`}
          >
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
            Please Select Your House
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
                logoSrc={`/img/${house.house.toLowerCase()}.png`}
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
