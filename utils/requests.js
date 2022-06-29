const API_KEY = process.env.TMDB_API_KEY;
const language = "en-US";

const requests = {
  baseUrl: "https://api.themoviedb.org/3",
  fetchTrending: {
    title: "Trending",
    url: `/trending/all/week?api_key=${API_KEY}&language=${language}`,
  },
  fetchTopRated: {
    title: "Top Rated",
    url: `/movie/top_rated?api_key=${API_KEY}&language=${language}`,
  },
  defaultSection: "fetchTrending",
};

export default requests;
