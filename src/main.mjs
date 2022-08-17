import { API_URL, API_KEY} from './secret.mjs';
import { movieContainer,categoriesContainer } from './nodes.mjs'
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

export async function getTrendingMoviesPreview (){
    const { data } = await api(ULR_GET_TRENDING_PREVIEW);
    const movies = await data.results;
    movieContainer.innerHTML = ``
    movies.forEach(movie => {
        movieContainer.innerHTML += `
        <img src="https://image.tmdb.org/t/p/w300/${movie.poster_path}" alt="${movie.title}">
        `
    });
}
// getTrendingMoviesPreview()

export async function getCategoriesMoviesPreview (){
    const { data } = await api(ULR_GET_CATEGORIES_PREVIEW);
    const categories = await data.genres;
    categoriesContainer.innerHTML = ``
    categories.forEach(category => {
        if (!category.name.includes('TV')){
            categoriesContainer.innerHTML += `
            <div id='${category.id}' class="categories--items">
                ${category.name}
            </div>
            `
        }
    });
    let btnList = categories.map(category => category.id )
    btnList.forEach(btnCategory => {
        let event = document.getElementById(btnCategory)
        event.addEventListener('click',() => location.hash= `#category=${btnCategory}`)
    })
}
// getCategoriesMoviesPreview()