"use client";

import React, { FC } from "react";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export const Header: FC = () => {
  const pathname = usePathname();

  return (
    <header className="flex fixed z-20 text-xl inset-x-0 h-20 px-6 py-4 items-center justify-between bg-green-700 border-b-2 border-green-800">
      <Link href="/">
        <Image
          className={"rounded-full border shadow hover:scale-125 ease-in duration-100"}
          alt="cat logo"
          width={50}
          height={50}
          src="./assets/cat.svg"
        />
      </Link>
      <nav className="flex gap-x-4">
        <Link
          className={`hover:underline text-slate-200 text-2xl ${pathname == "/" && "underline"}`}
          href={"/"}
        >
          Home
        </Link>
        <Link
          className={`hover:underline text-slate-200 text-2xl ${
            pathname == "/cats" && "underline"
          }`}
          href={"/cats"}
        >
          Cats
        </Link>
      </nav>
    </header>
  );
};
