import { getTrendingMoviesPreview,getCategoriesMoviesPreview,getMoviesByCategory } from './main.mjs';
import { headerModule,mainModule,modalModule,searchModule,footerModule,btnSearch,btnBack,btnBackCategory,btnSearchCategory,titleCategory } from './nodesDOM.mjs';

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
    toggleVisibilitySection(headerModule,'active')
    toggleVisibilitySection(mainModule,'active')
    toggleVisibilitySection(modalModule,'inactive')
    toggleVisibilitySection(searchModule,'inactive')
    toggleVisibilitySection(footerModule,'active')
    getCategoriesMoviesPreview()
    getTrendingMoviesPreview()
}
function trendPage (){
    windowsTopStart()
    toggleVisibilitySection(headerModule,'inactive')
    toggleVisibilitySection(mainModule,'inactive')
    toggleVisibilitySection(modalModule,'inactive')
    toggleVisibilitySection(searchModule,'active')
    toggleVisibilitySection(footerModule,'active')
}
function searchPage (){
    windowsTopStart()
    toggleVisibilitySection(headerModule,'inactive')
    toggleVisibilitySection(mainModule,'inactive')
    toggleVisibilitySection(modalModule,'inactive')
    toggleVisibilitySection(searchModule,'active')
    toggleVisibilitySection(footerModule,'active')
}
function categoryPage (){
    windowsTopStart()
    toggleVisibilitySection(headerModule,'inactive')
    toggleVisibilitySection(mainModule,'inactive')
    toggleVisibilitySection(modalModule,'inactive')
    toggleVisibilitySection(searchModule,'active')
    toggleVisibilitySection(footerModule,'active')
    toggleVisibilitySection(titleCategory,'active')
    toggleVisibilitySection(btnSearchCategory,'inactive')
    
    let idCategory =  location.hash.split('=')[1]

    getMoviesByCategory(idCategory)
}
function moviePage (){
    windowsTopStart()
    toggleVisibilitySection(headerModule,'inactive')
    toggleVisibilitySection(mainModule,'inactive')
    toggleVisibilitySection(mainModule,'inactive')
    toggleVisibilitySection(modalModule,'active')
    toggleVisibilitySection(footerModule,'active')
}
homePage()
windowsTopStart()

function toggleVisibilitySection (itemToggleDOM,state){
    state.includes('inactive') ? itemToggleDOM.classList.add('inactive') :itemToggleDOM.classList.remove('inactive')
}