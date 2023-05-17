import { BASE_URL } from "./api";
import { API_KEY } from "./api";

async function getMovies(params) {
    return await fetch(`${BASE_URL}${params}${API_KEY}`)
                .then(response => {return response.json()})
};

export default getMovies;

// `${BASE_URL}trending/all/day?api_key=${API_KEY}`
// `${BASE_URL}search/movie?api_key=${API_KEY}&query=terminator`
// `${BASE_URL}movie/{movie_id}?api_key=${API_KEY}`
// `${BASE_URL}movie/{movie_id}/credits?api_key=${API_KEY}`
// `${BASE_URL}movie/{movie_id}/reviews?api_key=${API_KEY}`