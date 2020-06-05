const navSlide = () => {
    const burger = document.querySelector('.burger');
    const links = document.querySelectorAll('#nav-links li');

    burger.addEventListener('click', () => {
        const nav = document.querySelector('#nav-links');

        if (nav.classList.contains('active')) {
            nav.style.transform = 'translateX(100%)';
            nav.classList.remove('active');
        } else {
            nav.style.transform = 'translateX(0)';
            nav.style.transition = 'all 0.3s';
            nav.classList.add('active');
        }

        links.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinksFade 0.5s ease forwards ${index / 7 + 0.2}s`;
                console.log(index / 7 + 0.2);
            }
        });


        burger.classList.toggle('toggle');

    });



}

navSlide();

const API_KEY = 'e4c41ae3e8578a454aa7575f144a0f14';

const searchButton = document.querySelector('#search');
const searchInput = document.querySelector('#input-value');
const movieSearchable = document.querySelector('#movie-searchabel');
const imageElement = document.querySelector('img');

const movie = new Movie();
const ui = new UI();

searchButton.addEventListener('click', function (event) {

    movie.getSearchResult(searchInput.value)
        .then(res => {
            movieSearchable.innerHTML = '';
            const movieBlock = ui.createMovieContainer(res.result.results);
            movieSearchable.appendChild(movieBlock);
            searchInput.value = '';
        })
        .catch((error) => {
            console.log('Error while searching..', error);
        });


    event.preventDefault();
});

// Event delegation to select image
movieSearchable.addEventListener('click', function (event) {

    const target = event.target;

    if (target.tagName.toLowerCase() === 'img') {
        const movieId = event.target.dataset.movieId;
        console.log(movieId);

        const section = event.target.parentElement; // section
        const content = section.nextElementSibling; // content
        content.classList.add('content-display');


        movie.getVideos(movieId)
            .then(res => {
                ui.createVideoTemplate(res, content);
            });


    }


    if (target.id === 'content-close') {
        const content = target.parentElement; // content
        content.classList.remove('content-display');
    }

});








