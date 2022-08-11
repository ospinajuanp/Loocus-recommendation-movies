import { API_URL, API_KEY} from './secret.mjs';
const ULR_GET_TRENDING_PREVIEW = `trending/movie/day`
const ULR_GET_CATEGORIES_PREVIEW = `genre/movie/list`

const api = axios.create({
    baseURL:`${API_URL}`,
    headers:{
        'Content-Type':'application/json;charset=utf-8',
    },
    params:{
        'api_key':`${API_KEY}`
    },
})

async function getTrendingMoviesPreview (){
    const { data } = await api(ULR_GET_TRENDING_PREVIEW);
    const movies = await data.results;
    const movieContainer = document.querySelector('.container-popular--wrapper')
    console.log(movieContainer);
    movieContainer.innerHTML = ``
    movies.forEach(movie => {
        movieContainer.innerHTML += `
        <img src="https://image.tmdb.org/t/p/w300/${movie.poster_path}" alt="${movie.title}">
        `
    });
}
getTrendingMoviesPreview()

async function getCategoriesMoviesPreview (){
    const { data } = await api(ULR_GET_CATEGORIES_PREVIEW);
    const categories = await data.genres;
    console.log(categories);
    const categoriesContainer = document.querySelector('.container-categories--items')
    categoriesContainer.innerHTML = ``
    categories.forEach(categorie => {
        if (!categorie.name.includes('TV')){
            categoriesContainer.innerHTML += `
            <div class="categories--items">
                ${categorie.name}
            </div>
            `
        }
    });
}
getCategoriesMoviesPreview()