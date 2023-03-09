import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Movie } from "../typings";
import { baseUrl } from "./movie";
import {FaPlay } from 'react-icons/fa'
import { InformationCircleIcon } from "@heroicons/react/20/solid";

interface Props {
  netflixOriginals: Movie[];
}

function Banner({ netflixOriginals }: Props) {
  // we provide a type to our usestate,movie is going to be a type of Movie or
  // it can be null
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    );
  }, [netflixOriginals]);
  //   everytime netflix orginals changes ,the use effect will run and not
  // just on mount and we will get a different movie randomly
  console.log(movie);
  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end">
      <div className="absolute top-0 left-0 h-[95vh] w-screen -z-10">
        <Image
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
          fill
          alt=""
          className="object-cover"
        />
      </div>

      <h1 className="text-2xl md:text-4xl lg:text-7xl font-bold">
        {movie?.title || movie?.name || movie?.original_name}
      </h1>
      <p className="max-w-xs text-shadow-lg text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">
        {movie?.overview}
      </p>

      <div className="flex items-center space-x-3">
        <button className="bannerBtn bg-white text-black">
          <FaPlay className="w-4 h-4 text-black md:w-7 md:h-7"/>
          Play
        </button>
        <button className="bannerBtn bg-[gray]/70">
          <InformationCircleIcon className="h-5 w-5 md:w-8 md:h-8" />
          More Info</button>
      </div>
    </div>
  );
}

export default Banner;
