
const apiKey = 'api_key=eb80a844a5f54f4bbed77b29e3831ee2';
const baseURL = 'https://api.themoviedb.org/3';
const apiURL = baseURL + '/discover/movie?sort_by=popularity.desc&'+apiKey;
const searchURL = baseURL + '/search/movie?'+apiKey;
const imgURL = 'https://image.tmdb.org/t/p/w500';

const main = document.querySelector('.main');
const boxSearch = document.querySelector('.bx-search');
const search = document.querySelector('.search');
const form = document.querySelector('#form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchItem = search.value;

    if(searchItem) {
        getMovies(searchURL +'&query=' +searchItem);
    }
}) 



function hide () {
    search.classList.toggle('hidden');
}



getMovies(apiURL);

function getMovies(url) {
    fetch(url).then(res => res.json()).then(data => {
        console.log(data);
        showMovies(data.results);
    })
}

function showMovies(data) {
    main.innerHTML = '';

    data.forEach(movie => {
        const {title, poster_path, vote_average, overview} = movie
        const element = document.createElement('div');
        element.classList.add('movie');
        element.innerHTML = ` 
        <img src="${imgURL + poster_path}">

        <div class="info">
            <h3 class="title">${title}</h3>
            <span class="green">
                ${vote_average}
            </span>
        </div>

        <div class="overview">
            <h3>overview</h3>
            <p>
                ${overview};
            </p>
        </div>
        
        `

        main.appendChild(element);
    });
}


