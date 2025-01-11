import React from 'react';

type CardProps = {
  title: string;
  copy: string;
  onMouseEnter: () => void;
};

const CardSpells = ({ title, copy, onMouseEnter }: CardProps) => {
  return (
    <div
      className="relative flex items-end p-4 text-center  shadow-xl rounded-lg border border-gray-400 card group overflow-hidden"
      onMouseEnter={onMouseEnter}
    >
      <div className="relative flex flex-col items-center w-full p-4 z-10 content transition-transform duration-700 ease-out transform translate-y-full group-hover:translate-y-0 bg-black bg-opacity-70">
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="font-serif italic text-sm">{copy}</p>
      </div>
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out transform group-hover:scale-110"
        style={{
          backgroundImage: 'url("img/spell-luna.jpg")',
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>
    </div>
  );
};

export default CardSpells;
