import { getTrendingMoviesPreview,getCategoriesMoviesPreview,getMoviesByCategory } from './main.mjs';
import { headerModule,mainModule,modalModule,searchModule,footerModule,btnSearch,btnBack,btnBackCategory,btnSearchCategory,titleCategory } from './nodes.mjs';

btnSearch.addEventListener('click',() => {  
    location.hash = '#search='
})
btnBack.addEventListener('click',() => {  
    location.hash = '#home'
})
btnBackCategory.addEventListener('click',() => {  
    location.hash = '#home'
})

window.addEventListener('DOMContentLoaded',navigator,false)
window.addEventListener('hashchange',navigator,false)

function navigator (){
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
}

function windowsTopStart (){
    window.scrollTo(0,0);
}

function homePage (){
    windowsTopStart()
    headerModule.classList.remove('inactive')
    mainModule.classList.remove('inactive')
    modalModule.classList.add('inactive')
    searchModule.classList.add('inactive')
    footerModule.classList.remove('inactive')
    getCategoriesMoviesPreview()
    getTrendingMoviesPreview()
}
function trendPage (){
    windowsTopStart()
    headerModule.classList.add('inactive')
    mainModule.classList.add('inactive')
    modalModule.classList.add('inactive')
    searchModule.classList.remove('inactive')
    footerModule.classList.remove('inactive')
}
function searchPage (){
    windowsTopStart()
    headerModule.classList.add('inactive')
    mainModule.classList.add('inactive')
    modalModule.classList.add('inactive')
    searchModule.classList.remove('inactive')
    footerModule.classList.remove('inactive')
}
function categoryPage (){
    windowsTopStart()
    headerModule.classList.add('inactive')
    mainModule.classList.add('inactive')
    modalModule.classList.add('inactive')
    searchModule.classList.remove('inactive')
    footerModule.classList.remove('inactive')
    titleCategory.classList.remove('inactive')
    btnSearchCategory.classList.add('inactive')

    let idCategory =  location.hash.split('=')[1]

    getMoviesByCategory(idCategory)
}
function moviePage (){
    windowsTopStart()
    headerModule.classList.add('inactive')
    mainModule.classList.add('inactive')
    modalModule.classList.remove('inactive')
    searchModule.classList.add('inactive')
    footerModule.classList.remove('inactive')
}
homePage()
windowsTopStart()