import { getTrendingMoviesPreview,getCategoriesMoviesPreview } from './main.mjs';
import { headerModule,mainModule,modalModule,searchModule,footerModule } from './nodes.mjs';

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
    headerModule.classList.remove('inactive')
    mainModule.classList.remove('inactive')
    modalModule.classList.add('inactive')
    searchModule.classList.add('inactive')
    footerModule.classList.remove('inactive')
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