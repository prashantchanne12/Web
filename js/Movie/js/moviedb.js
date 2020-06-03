class MovieDB {
    constructor() {
        this.key = 'e4c41ae3e8578a454aa7575f144a0f14';
    }

    async getNowPlaying() {
        const moviesResponse = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${this.key}&language=en-US&page=1
        `);

        const movies = await moviesResponse.json();

        return movies;
    }
}