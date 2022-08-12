import { getTrendingMoviesPreview,getCategoriesMoviesPreview } from './main.mjs';

window.addEventListener('DOMContentLoaded',navigator,false)
window.addEventListener('hashchange',navigator,false)

function navigator (){
    console.log(location)

    if (location.hash.startsWith('#trends')){
        trendPage();
    } else if(location.hash.startsWith('#search=')){
        searchPage();
    } else if(location.hash.startsWith('#movie=')){
        moviePage();
    } else if(location.hash.startsWith('#category=')){
        categoryPage();
    }else{
        homePage()
    }
    location.hash
}

function homePage (){
    getCategoriesMoviesPreview()
    getTrendingMoviesPreview()
}
function trendPage (){
    
}
function searchPage (){

}
function moviePage (){
    
}
function categoryPage (){

}