"use client";

import React, { FC, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { getCats } from "@/__pages/cats/api/getCats";
import { useAppDispatch, useAppSelector } from "@/app/shared/hooks/store";
import { addCats, removeCats } from "@/app/store/slices/catsSlice";

import useInfiniteScroll from "@/app/shared/hooks/useInfiniteScroll";
import Loader from "@/app/shared/ui/Loader";

const CatList: FC = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const cats = useAppSelector((state) => state.catsSlice);
  const { size, mimeType, order } = useAppSelector((state) => state.sortSelectSlice);

  const getCatsHandler = async () => {
    setLoading(true);
    const res = await getCats(size, mimeType, order);
    const response = await res;
    if (response) {
      dispatch(addCats(response.data));
      setLoading(false);
    } else {
      console.error("no data");
    }
  };

  const { scrollContainerRef, isFetching } = useInfiniteScroll({ onFetchMore: getCatsHandler });

  useEffect(() => {
    getCatsHandler();
  }, [dispatch]);

  useEffect(() => {
    dispatch(removeCats());
  }, [size, mimeType, order]);

  if (!cats) return <div>No cats</div>;

  return (
    <>
      <div className="w-full flex flex-wrap gap-4 place-items-stretch px-5 justify-center">
        {cats.map(({ id, url }) => (
          <Link
            key={id}
            className="h-80 max-w-xl w-full transition overflow-hidden bg-black/20 shadow-md backdrop-blur rounded hover:opacity-95 hover:scale-105"
            href={`cats/${id}`}
          >
            <Image
              src={url}
              alt={`Cat ${id}`}
              className="w-full h-full object-cover origin-center"
              width={300}
              height={300}
            />
          </Link>
        ))}
      </div>

      {loading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <div ref={scrollContainerRef}></div>
      )}
      {isFetching && <Loader />}
    </>
  );
};

export default CatList;
