import Image from "next/image";
import { Movie } from "../typings";

interface Props {
  //   movie: Movie | DocumentData[];
  movie: Movie;
}

function Thumbnail({ movie }: Props) {
  return (
    <div className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105">
      <Image
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        className="rounded-sm object-cover md:rounded"
        layout="fill"
      />
      <h1 className="absolute bottom-4 left-3 text-2xl lg:text-2xl md:text-1xl">
        {movie.title || movie.name}
      </h1>
    </div>
  );
}

export default Thumbnail;
