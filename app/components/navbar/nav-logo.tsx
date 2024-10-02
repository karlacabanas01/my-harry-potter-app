import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export function NavbarLogo(): JSX.Element {
  return (
    <div className="flex flex-row items-center">
      <Link href="/#home" className="flex items-center">
        <Image
          src="/img/logo.png"
          alt="Logo de Harry Potter"
          width={120}
          height={120}
          className="mr-2"
        />
        <h1 className="hidden sm:block text-3xl font-bold text-white pangolin ">
          Harry Potter
        </h1>
      </Link>
    </div>
  );
}
