import { BASE_URL } from "./api";
import { API_KEY } from "./api";

async function getMovies() {
    return await fetch(`${BASE_URL}movie/550?api_key=${API_KEY}`)
                .then(response => {return response.json()})
};

export default getMovies;
