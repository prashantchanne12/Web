class UI {
    createMovieContainer(movies) {
        const movieElement = document.createElement('div');
        movieElement.setAttribute('class', 'movie');

        const movieTemplate = `
    
            <section class="section-movie">
                ${this.movieSection(movies)}
            </section>
            <div class="content">
                <p id="content-close">X</p>
            </div>
        
        `;

        movieElement.innerHTML = movieTemplate;

        return movieElement;
    }

    movieSection(movies) {
        return movies.map((movie) => {
            if (movie.poster_path) {
                return `<img src=https://image.tmdb.org/t/p/w500/${movie.poster_path} data-movie-id=${movie.id} />`;
            }
        });
    }

    createIframe(videoKey) {
        const iframe = document.createElement('iframe');
        console.log(videoKey);
        iframe.src = `https://www.youtube.com/embed/${videoKey}`;
        iframe.width = 360;
        iframe.height = 315;
        iframe.allowFullscreen = true;
        return iframe;
    }


    createVideoTemplate(res, content) {

        content.innerHTML = '<p id="content-close">X</p>';

        const videos = res.result.results;
        const length = videos.length > 3 ? 3 : videos.length;
        const iframeContaienr = document.createElement('div');

        for (let i = 0; i < length; i++) {
            const video = videos[i];
            const iframe = ui.createIframe(video.key);
            iframeContaienr.appendChild(iframe);
            content.appendChild(iframeContaienr);
        }
    }


}