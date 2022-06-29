import SectionBar from "../components/SectionBar";
import requests from "../utils/requests";
import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";

export default function Home(props) {
  console.log({ props });
  return (
    <main className="w-full">
      <SectionBar />
      <div
        className="bg-gray-700 text-gray-300 p-4 sm:p-8 gap-8 grid grid-cols-1
        sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"
      >
        {props.results.map((item) => (
          <MovieCard
            key={item.id}
            image={item.backdrop_path}
            title={item.title || item.name}
            overview={item.overview}
            releaseDate={item.release_date || item.first_air_date}
            rating={item.vote_average}
            rates={item.vote_count}
          />
        ))}
      </div>

      <Pagination
        query={props.query}
        previousPage={props.previousPage}
        nextPage={props.nextPage}
      />
    </main>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre || requests.defaultSection;
  const url =
    requests.baseUrl + requests[genre].url + `&page=${context.query.page || 1}`;
  const data = await fetch(url).then((res) => res.json());

  return {
    props: {
      ...data,
      url,
      genre,
      nextPage:
        data.page >= data.total_pages ? data.total_pages : data.page + 1,
      previousPage: data.page <= 1 ? 1 : data.page - 1,
      query: context.query,
    },
  };
}
