// DOM load event
document.addEventListener('DOMContentLoaded', function () {
    const moviedb = new MovieDB();

    moviedb.getNowPlaying()
        .then(data)
         
});