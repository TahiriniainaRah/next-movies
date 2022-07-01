import { ArrowSmLeftIcon, ArrowSmRightIcon } from "@heroicons/react/solid";
import { useRef, useState, useEffect } from "react";
import MovieCard from "../../components/MovieCard";

const HorrorMovie = ({ movies }) => {
  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);
  const [clickLimit, setClickLimit] = useState(); //mb apety ny click ref any @ media queries

  const listRef = useRef();

  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${330 + distance}px)`;
    }
    if (direction === "right" && slideNumber < 10 - clickLimit) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-330 + distance}px)`;
    }
  };

  const handleWindowResize = () => {
    setClickLimit(window.innerWidth / 330);
  };

  useEffect(() => {
    handleWindowResize();

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className="bg-gray-700 container max-w-7xl mx-auto pb-10 px-4 overflow-hidden">
      <h1 className="text-white text-2xl mt-8 mb-5">Horror Movies</h1>
      <div className="relative">
        <ArrowSmLeftIcon
          className="rounded-full p-2  bg-slate-300 my-2 cursor-pointer h-full m-auto relative inset-y-0 text-red-500 w-10 z-100 left-0"
          onClick={() => handleClick("left")}
          style={{ display: !isMoved && "none" }}
        />

        <div
          className="flex gap-4 mt-2 ml-12 translateX(0px) all 1 ease"
          ref={listRef}
        >
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
        <ArrowSmRightIcon
          className="rounded-full p-2 bg-slate-300 my-2 cursor-pointer h-full m-auto relative inset-y-0 text-red-500 w-10 z-100 right-0"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
};

export default HorrorMovie;
