interface ButtonMoreProps {
  label?: string;
  onClick: () => void;
}

export function ButtonMore({ label, onClick }: ButtonMoreProps): JSX.Element {
  return (
    <button
      type="submit"
      className="flex justify-center gap-2 items-center mx-auto shadow-xl text-md text-gray-800 bg-[#fffcfc] lg:font-semibold border-gray-50 relative z-10 px-2 py-1 border-2 rounded-xl overflow-hidden group transition-all duration-300 ease-in-out hover:scale-105 hover:bg-[#946b2d] hover:text-white"
      onClick={onClick}
    >
      {label}
      <svg
        className="w-8 h-8 justify-end group-hover:rotate-180 group-hover:bg-gray-50 text-gray-600 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-90"
        viewBox="0 0 16 19"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
          className="fill-gray-800 group-hover:fill-gray-800"
        ></path>
      </svg>
    </button>
  );
}
