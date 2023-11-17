import React from "react";
import Image from "next/image";

import { BASE_URL } from "@/app/api/ApiInstance";
import { ICat } from "@/app/shared/config/types";

async function getOneCat(id: string) {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, { cache: "force-cache" });
    return (await res.json()) as ICat;
  } catch (error) {
    console.error(error);
  }
}

export default async function CatView({ params }: { params: { id: string } }) {
  const data = await getOneCat(params.id);

  if (!data) return <div>Something went wrong</div>;

  return (
    <div className={"w-full flex justify-center"}>
      <div
        className={
          "flex flex-col max-w-md mx-auto bg-white/30 mt-8 mx-4 md:mt-20 backdrop-blur rounded-xl  md:px-7 border border-gray-200 shadow-md shadow-slate-400 items-center pt-7 relative z-10"
        }
      >
        <div className="max-w-sm w-full flex justify-center items-center h-96 overflow-hidden">
          <Image
            src={data.url}
            alt={`Cat ${data.id}`}
            className="w-full h-full object-cover origin-center rounded"
            width={384}
            height={384}
          />
        </div>
        <h1 className="text-4xl w-full text-slate-600 pl-4 md:pl-0 py-7 font-bold">
          Image ID - <span className="text-slate-800">{data.id}</span>
        </h1>
      </div>
    </div>
  );
}
