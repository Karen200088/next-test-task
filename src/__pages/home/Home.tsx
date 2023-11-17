import React, { FC } from "react";

import Link from "next/link";

export const Home: FC = () => {
  return (
    <div className="flex min-h-screen overflow-hidden relative -mt-20 font-bold h-full justify-center items-center w-full text-[72px] text-center">
      <h1 className="gradient-text shadow p-5 rounded-xl text-primary-800 bg-white backdrop-blur bg-white/20 z-10">
        Welcome to
        <Link className="underline hover:opacity-50 duration-200 pl-2" href={"/cats"}>
          cat app
        </Link>
      </h1>
    </div>
  );
};
