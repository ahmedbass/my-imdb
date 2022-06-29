import SectionBar from "../components/SectionBar";
import requests from "../utils/requests";

export default function Home(props) {
  console.log({props});
  return (
      <main className="w-full">
        <SectionBar/>
        <div>
          {props.results.map((item) => (
              <h1 key={item.id}>{item.title}</h1>
          ))}
        </div>
      </main>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre || requests.defaultSection;
  const url = requests.baseUrl + requests[genre].url;
  const data = await fetch(url).then((res) => res.json());

  return {
    props: {
      ...data,
      url,
      genre,
      nextPage: data.page >= data.total_pages ? "" : `&page=${data.page + 1}`,
      previousPage: data.page <= 1 ? "" : `&page=${data.page - 1}`
    }
  };
}
