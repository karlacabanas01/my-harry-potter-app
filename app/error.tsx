'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { IoAlertCircleOutline } from 'react-icons/io5';

export default function ErrorPage({ error }: { error: Error }) {
  const router = useRouter();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-transparent text-white">
      <div className="mb-8">
        <IoAlertCircleOutline size={100} />
      </div>

      <h1 className="text-5xl font-extrabold mb-4 text-center">
        Oops! Something went wrong.
      </h1>

      <p className="text-lg md:text-xl mb-8 text-center max-w-2xl">
        It looks like the page you're looking for doesn't exist, or an
        unexpected error occurred. Please try returning to the home page.
      </p>

      <button
        onClick={() => router.push('/')}
        className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-400"
      >
        Go back to the homepage
      </button>
    </div>
  );
}
