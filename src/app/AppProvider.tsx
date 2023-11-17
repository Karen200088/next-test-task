"use client";

import { FC, ReactNode } from "react";
import { Provider } from "react-redux";
import Image from "next/image";

import { store } from "@/app/store/appStore";
import { Header } from "@/app/widgets/Header";

interface PageProps {
  children: ReactNode;
}

export const AppWrapper: FC<PageProps> = ({ children }) => {
  return (
    <Provider store={store}>
      <Header />
      <main className="pt-20">
        {children}
        <Image
          className="fixed inset-x-0 w-full object-cover bottom-0 h-screen"
          width={1920}
          height={1080}
          alt="cat background"
          src="/assets/home-background.png"
        />
      </main>
    </Provider>
  );
};
