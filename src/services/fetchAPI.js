import { BASE_URL } from "./api";
import { API_KEY } from "./api";

async function getMovies(params) {
    return await fetch(`${BASE_URL}${params}${API_KEY}`)
                .then(response => {return response.json()})
};

export default getMovies;
