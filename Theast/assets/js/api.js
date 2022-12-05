const API_KEY = "api_key=38c007f28d5b66f36b9c3cf8d8452a4b";
const API_BASE = "https://api.themoviedb.org/3";
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const API_URL = API_BASE + '/discover/movie?sort_by=popularity.desc&' + API_KEY;
const API_URL2 = API_BASE + '/movie/top_rated?language=pt-BR&' + API_KEY;
const API_URL3 = API_BASE + '/discover/tv?with_network=213&language=pt-BR&' + API_KEY;


// FAZENDO FETCH NA LISTA GERAL DE FILMES
const fazerFetch = async (url) => {
    const requisicao = await fetch(`${API_BASE}/trending/all/week?&language=pt-BR&${API_KEY}`);
    const dataJson = await requisicao.json();

    var aleatorio = Math.floor(Math.random() * dataJson.results.length);
    pegarFilmeHeroDestaque(dataJson.results[aleatorio]);
}

fazerFetch();

// PEGANDO 1 FILME EM DESTAQUE
async function pegarFilmeHeroDestaque(escolhido) {
    var tipo = escolhido.media_type;
    var id = escolhido.id;
    var apibusca;
    var buscar;

    switch (tipo) {
        case "movie":
            apibusca = `https://api.themoviedb.org/3/movie/${id}?${API_KEY}&language=pt-BR`;
            break;
        case "tv":
            apibusca = `https://api.themoviedb.org/3/tv/${id}?${API_KEY}&language=pt-BR`;
            break;
    }

    var buscar = await fetch(`${apibusca}`);
    var dataBusca = await buscar.json();
    mostrarFilmesDestaqueHero(escolhido);
}

const heroContainer = document.querySelector(".hero-container");

// MOSTRANDO FILME EM DESTAQUE
function mostrarFilmesDestaqueHero(filme) {
    var {
        backdrop_path,
        title,
        name,
        vote_average,
        overview,
        runtime,
        release_date,
        first_air_date,
        number_of_seasons,
        number_of_episodes,
        genres
    } = filme;

    vote_average = vote_average.toFixed(1);

    let tempo = runtime;
    let nome = title ?? name;
    let data = release_date ?? first_air_date;
    data = data.slice(0, 4);
    let temporadas = "";
    if (number_of_seasons) {
        temporadas = number_of_seasons + " temporadas";
    }
    let episodios = number_of_episodes ?? "";

    overview = overview.slice(0, 200) + "...";


    const filmeElement = document.createElement("div");
    filmeElement.classList.add("hero");
    filmeElement.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${backdrop_path})`;
    filmeElement.innerHTML =
        `
                    <div class="overlay"></div>
                    <div class="hero-slide-item-content">
                        <div class="item-content-wraper">
                            <div class="item-content-title top-down">
                                ${nome}
                            </div>
                            <div class="movie-infos top-down delay-2">
                                <div class="movie-info">
                                    <span>${data}</span>
                                </div>
                                <div class="movie-info">
                                    <i class="bx bxs-star"></i>
                                    <span>${vote_average}</span>
                                </div>
                                <div class="movie-info">
                                    <span>HD</span>
                                </div>
                            </div>
                            <div class="item-content-description top-down delay-4">
                                ${overview}
                            </div>
                            <div class="item-action top-down delay-6">
                                <a href="#" class="btn btn-hover">
                                    <i class="bx bxs-right-arrow"></i>
                                    <span>Watch now</span>
                                </a>
                            </div>
                        </div>
                    </div>
        
        `;
    heroContainer.appendChild(filmeElement);
}

getMovies(API_URL);
getMovies(API_URL2);


function getMovies(url) {
    lastUrl = url;
    fetch(url).then(res => res.json()).then(data => {
        console.log(data.results)
        showMovies(data.results);
    })

}

const main = document.getElementById('filmes');

function showMovies(data) {
    data.forEach(movie => {
        const {
            title,
            poster_path,
            vote_average
        } = movie;
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML = `
             <img src="${poster_path? IMG_URL+poster_path: "http://via.placeholder.com/1080x1580" }" alt="${title}">
        `
        main.appendChild(movieEl);
    })
}

getSeries(API_URL3);

function getSeries(url) {
    lastUrl = url;
    fetch(url).then(res => res.json()).then(data => {
        console.log(data.results)
        showSeries(data.results);
    })

}

const series = document.getElementById('series');

function showSeries(data) {
    data.forEach(movie => {
        const {
            title,
            poster_path,
            vote_average
        } = movie;
        const serieEl = document.createElement('div');
        serieEl.classList.add('movie');
        serieEl.innerHTML = `
             <img src="${poster_path? IMG_URL+poster_path: "http://via.placeholder.com/1080x1580" }" alt="${title}">
        `
        series.appendChild(serieEl);
    })
}