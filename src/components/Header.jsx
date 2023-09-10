"use client";
import { IconUserPlus } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from 'react-redux';

export default function Header() {

  const { currentUser } = useSelector(rootReducer => rootReducer.userReducer)

  return (
    <header className="w-full h-20 bg-primaryWhite dark:bg-zinc-900 flex justify-between items-center px-6 shadow-md">
      <div className={`${!currentUser ? 'w-20' : ''}`}>
        {!currentUser ? (
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
            <span className=''>{currentUser.name}</span>
            <span className="font-bold text-xs">{currentUser.location}</span>
          </div>
        )}
      </div>
      <div>
        {!currentUser ? (
          <Link
            href="/users/signin"
            className="text-primaryGreen hover:text-secondaryGreen"
          >
            <IconUserPlus />
          </Link>
        ) : (
          <div className="avatar online">
            <div className="w-12 rounded-full">
              <img src={currentUser.image} />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
