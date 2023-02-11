import Image from "next/image";
import { useState, useEffect } from "react";
import { baseUrl } from "../constants/movie";
import { Movie } from "../typings";
import { FaPlay } from "react-icons/fa";
import { AiFillInfoCircle } from "react-icons/ai";

interface Props {
  netflixOriginals: Movie[];
}

function Banner({ netflixOriginals }: Props) {
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    );
  }, [netflixOriginals]);

  console.log(movie);

  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
      <div className="absolute top-0 left-0 -z-10 h-[95vh] w-screen">
        <img
          className="w-screen h-screen"
          src='blob:https://web.whatsapp.com/6bf4c256-aa1d-467a-a676-254147325fa3'
          alt=""
        />
      </div>

      <div className="ml-[6rem]">
        <div className="mb-[5rem]">
          <h1 className="text-2xl lg:text-7xl font-bold md:text-4xl sedatfont">
            Bahattin
          </h1>
        </div>
        <p className="mx-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">
          Ülkesine dönüş biletini eski dostları iptal eder. Ancak son bileti
          kesmek üzere bir kamera ve bir tripodla ifşa silsilesini başlatmaya
          hazırdır.
        </p>
      </div>

      <div className="flex space-x-3 ml-[6rem]">
        <button className="bannerButton bg-white text-black">
          <FaPlay className="h-4 w-4 text-black md:h-7 md:w-7" /> Oynat
        </button>
        <button className="bannerButton bg-black/60 text-white">
          <AiFillInfoCircle className="h-4 w-4 text-white md:h-7 md:w-7" /> Daha
          Fazla Bilgi Al
        </button>
      </div>
    </div>
  );
}

export default Banner;
