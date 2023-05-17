import { BASE_URL } from "./api";
import { API_KEY } from "./api";

async function queryMovies(params, query) {
    return await fetch(`${BASE_URL}${params}${API_KEY}${query}`)
                .then(response => {return response.json()})
};

export default queryMovies;