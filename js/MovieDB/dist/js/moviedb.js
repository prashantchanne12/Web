class Movie {
    constructor(api_key) {
        this.api_key = 'e4c41ae3e8578a454aa7575f144a0f14';
    }

    async getSearchResult(query) {
        const serachResult = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.api_key}&language=en-US&query=${query}&page=1&include_adult=false`);

        const result = await serachResult.json();

        return {
            result
        }
    }


    async getVideos(movieId){
        const videoResult = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${this.api_key}&language=en-US`);

        const result = await videoResult.json();

        return {
            result
        }
    }

}