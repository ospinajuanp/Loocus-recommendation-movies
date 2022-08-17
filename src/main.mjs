import { API_URL, API_KEY} from './secret.mjs';
import { movieContainer,categoriesContainer,containerCategory,titleCategory } from './nodes.mjs'
const ULR_GET_TRENDING_PREVIEW = `trending/movie/day`
const ULR_GET_CATEGORIES_PREVIEW = `genre/movie/list`
const ULR_GET_CATEGORY = `discover/movie`

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
    categories.forEach(category => {
        if (!category.name.includes('TV')){
            let event = document.getElementById(category.id)
            event.addEventListener('click',() => location.hash= `#category=${category.id}-${category.name}`)            
        }
    })
}
// getCategoriesMoviesPreview()

export async function getMoviesByCategory (id){
    let idCategory = id.split('-')[0]
    let nameCategory = id.split('-')[1]    
    const { data } = await api(ULR_GET_CATEGORY,{
        params:{
            with_genres:idCategory
        }
    });
    const movies = await data.results;
    titleCategory.innerHTML=`<h2>${nameCategory}</h2>`
    containerCategory.innerHTML=``
    for (let index = 0; index < 5; index++) {
        containerCategory.innerHTML+=`
        <div class="container-search--movies__item">
            <img src="https://image.tmdb.org/t/p/w500/${movies[index].poster_path}">
        </div>
        `
    }
    
}
// getMoviesByCategory()