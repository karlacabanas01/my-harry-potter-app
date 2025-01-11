import { useRouter } from 'next/navigation';

interface BackButtonProps {
  label?: string;
  route?: string;
}

const BackButton: React.FC<BackButtonProps> = ({
  label = 'Back to',
  route = '/',
}) => {
  const router = useRouter();

  return (
    <div className="mb-4">
      <button
        className="text-yellow-400 bg-black border-2 border-yellow-400 px-4 py-2 rounded-2xl hover:bg-yellow-400 hover:text-black transition duration-300 ease-in-out transform hover:scale-105"
        onClick={() => router.push(route)}
      >
        {label}
      </button>
    </div>
  );
};

export default BackButton;
