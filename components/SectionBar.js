import requests from "../utils/requests";
import { useRouter } from "next/router";

const SectionBar = (props) => {
  const router = useRouter();
  return (
    <div className="bg-gray-500  p-2 flex justify-center items-center space-x-8">
      {Object.entries(requests).map(([key, { title, url }]) => (
        <h2
          key={key}
          className="font-semibold text-gray-200 cursor-pointer hover:text-white"
          onClick={() => router.push(`?genre=${key}`)}
        >
          {title}
        </h2>
      ))}
    </div>
  );
};

export default SectionBar;
