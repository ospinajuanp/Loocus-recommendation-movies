import { API_URL, API_KEY} from './secret.mjs';
const ULR_GET_TRENDING_PREVIEW = `${API_URL}trending/movie/day?api_key=${API_KEY}`
const ULR_GET_CATEGORIES_PREVIEW = `${API_URL}/genre/movie/list?api_key=${API_KEY}`

let myHeaders = {
    'Content-Type': 'application/json',
}
let confFetch = {
    method: 'GET',
    headers: myHeaders,
}

async function getTrendingMoviesPreview (){
    const res = await fetch(ULR_GET_TRENDING_PREVIEW,confFetch);
    const data = await res.json();
    const movies = await data.results;
    const movieContainer = document.querySelector('.container-popular--wrapper')
    movieContainer.innerHTML = ``
    movies.forEach(movie => {
        movieContainer.innerHTML += `
        <img src="https://image.tmdb.org/t/p/w300/${movie.poster_path}" alt="${movie.title}">
        `
    });
}
getTrendingMoviesPreview()

