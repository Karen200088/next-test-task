"use client";

import React, { ChangeEvent, FC } from "react";

import { useAppDispatch, useAppSelector } from "@/app/shared/hooks/store";
import { filterByMimeType, filterByOrder, filterBySize } from "@/app/store/slices/sortSelectSlice";

import { OptionType } from "@/app/components/SortSelect/SortSelectValues.constants";

interface SelectProps {
  value: OptionType[];
  type: "size" | "mimeType" | "order";
}

export const SortSelect: FC<SelectProps> = ({ value, type }) => {
  const dispatch = useAppDispatch();
  const allFilters = useAppSelector((state) => state.sortSelectSlice);

  const selectChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    switch (type) {
      case "size":
        dispatch(filterBySize(event.target.value));
        break;
      case "mimeType":
        dispatch(filterByMimeType(event.target.value));
        break;
      case "order":
        dispatch(filterByOrder(event.target.value));
        break;
    }
  };

  return (
    <div className="relative flex gap-x-4 items-center">
      <p className="capitalize min-w-[90px]">{type}:</p>
      <select
        value={allFilters[type]}
        onChange={selectChangeHandler}
        className="block appearance-none w-40 bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-blue-500"
      >
        {value.map(({ id, label, value }) => (
          <option key={id} value={value}>
            {label}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute top-3 right-3">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M10 12l-8-8-1 1 9 9 9-9-1-1-8 8z" />
        </svg>
      </div>
    </div>
  );
};
