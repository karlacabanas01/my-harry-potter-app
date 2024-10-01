'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function ErrorPage({ error }: { error: Error }) {
  const router = useRouter();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <h1 className="text-4xl font-bold mb-4">¡Oops! Algo salió mal.</h1>
      <p className="mb-8 text-lg">
        Parece que la página que estás buscando no existe o ocurrió un error
        inesperado.
      </p>
      <button
        onClick={() => router.push('/')}
        className="border-2 border-gray-500 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-full"
      >
        Regresar a la página principal
      </button>
    </div>
  );
}
