import Image from 'next/image';

export default function Loading() {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: 'url(/img/bg.jpg)' }}
    >
      <div className="relative z-10 flex items-center justify-center space-x-6">
        <Image
          src="/img/pies.gif"
          alt="Cargando..."
          width={160}
          height={160}
          className="transform rotate-6"
        />
        <span className="text-4xl font-bold text-gray-900 im-fell-english">
          Loading...
        </span>
        <Image
          src="/img/pies.gif"
          alt="Rotando..."
          width={160}
          height={160}
          className="transform scale-x-[-1] rotate-12"
        />
      </div>
    </div>
  );
}
