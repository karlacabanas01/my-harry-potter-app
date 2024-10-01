import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export function NavbarLogo(): JSX.Element {
  return (
    <div className="flex items-center">
      <Link href="/#home">
        <Image
          src="/img/logo.png"
          alt="Logo de Harry Potter"
          width={60}
          height={60}
        />
      </Link>
      <h1 className="text-3xl font-bold text-white pangolin">Harry Potter</h1>
    </div>
  );
}
