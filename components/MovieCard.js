import {CalendarIcon, ThumbUpIcon} from "@heroicons/react/outline";
import Image from "next/image";
import requests from "../utils/requests";

const MovieCard = ({image, title, overview, rates, rating, releaseDate}) => {
  return (
      <div className="flex flex-col space-y-1 hover:text-white transition-colors group cursor-pointer active:text-amber-400">
        <div className="lg:group-hover:scale-110 transition-transform lg:group-hover:shadow-lg
         shadow-amber-500 mb-2 bg-gray-900 rounded-lg overflow-hidden">
          <Image
              src={`${requests.imagesBaseUrl}/${image}`}
              alt={title}
              layout="responsive"
              width={200}
              height={120}
              objectFit="cover"
          />
        </div>
        <p className="truncate">{overview}</p>
        <h3 className=" truncate font-bold text-lg">{title}</h3>

        <div className="flex md:flex-col lg:flex-row lg:space-x-4 justify-between items-center">
          <div className="flex items-center space-x-1 ">
            <CalendarIcon className="h-5"/>
            <p className="whitespace-nowrap">{releaseDate}</p>
          </div>
          <div className="flex items-center space-x-1">
            <ThumbUpIcon className="h-5"/>
            <p className="space-x-1">
              <span>{rating}</span>
              <span>({rates})</span>
            </p>
          </div>
        </div>
      </div>
  );
};
export default MovieCard;
