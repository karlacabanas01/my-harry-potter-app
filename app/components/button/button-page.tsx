const ButtonPage = ({
  onClick,
  children,
  className,
}: {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}) => (
  <button
    onClick={onClick}
    className={`${className} text-2xl bg-black text-yellow-400 border-2 border-yellow-400 font-bold py-3 px-8 rounded-full shadow-md hover:bg-yellow-400 hover:text-black transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-500`}
  >
    {children}
  </button>
);

export default ButtonPage;
