"use client";
import { IconUserPlus } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isLoged, setIsLoged] = useState(false);

  return (
    <header className="w-full h-20 bg-primaryWhite dark:bg-zinc-900 flex justify-between items-center px-6 shadow-md">
      <div className={`${!isLoged ? 'w-20' : ''}`}>
        {!isLoged ? (
        <Link href="/">
          <Image
            src="/img/touristtable-logo.png"
            alt="TouristTable"
            height={50}
            width={50}
          />
        </Link>

        ):(
          <div className='flex flex-col'>
            <span className=''>Walisson Gomes</span>
            <span className="font-bold text-xs">Brasília, DF</span>
          </div>
        )}
      </div>
      <div>
        {!isLoged ? (
          <Link
            href="/users/signin"
            className="text-primaryGreen hover:text-secondaryGreen"
          >
            <IconUserPlus />
          </Link>
        ) : (
          <div className="avatar online">
            <div className="w-12 rounded-full">
              <img src="/img/avatar.jpg" />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
