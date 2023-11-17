import React, { FC } from "react";

import CatList from "@/app/widgets/CatList/CatList";
import { ImageUpload } from "@/app/components/ImageUpload/ImageUpload";
import { SortSelect } from "@/app/components/SortSelect/SortSelect";

import {
  CatsOptionsSize,
  CatsOptionsOrder,
  CatsOptionsMimeTypes,
} from "@/app/components/SortSelect/SortSelectValues.constants";

export const Cats: FC = () => {
  return (
    <div className={"relative z-10"}>
      <div className={"flex flex-col py-4 px-5  gap-4"}>
        <div className="flex justify-between gap-4 flex-wrap">
          <SortSelect value={CatsOptionsSize} type={"size"} />
          <SortSelect value={CatsOptionsMimeTypes} type={"mimeType"} />
          <SortSelect value={CatsOptionsOrder} type={"order"} />
        </div>
        <div className="max-w-md mx-auto">
          <ImageUpload />
        </div>
      </div>
      <CatList />
    </div>
  );
};
