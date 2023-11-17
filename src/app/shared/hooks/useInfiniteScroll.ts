import { useEffect, useRef, useState } from "react";

interface InfiniteScrollProps {
  onFetchMore: () => void;
  rootMargin?: string;
}

const useInfiniteScroll = ({ onFetchMore, rootMargin = "0px" }: InfiniteScrollProps) => {
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const handleObserver = (entries: IntersectionObserverEntry[]) => {
    const target = entries[0];
    if (target.isIntersecting && !isFetching) {
      setIsFetching(true);
      onFetchMore();
    }
  };

  useEffect(() => {
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin,
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(handleObserver, options);

    if (scrollContainerRef.current) {
      observer.observe(scrollContainerRef.current);
    }

    return () => {
      if (scrollContainerRef.current) {
        observer.unobserve(scrollContainerRef.current);
      }
    };
  }, [onFetchMore, rootMargin, isFetching]);

  useEffect(() => {
    setIsFetching(false);
  }, [isFetching]);

  return { scrollContainerRef, isFetching };
};

export default useInfiniteScroll;
