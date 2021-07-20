import React from 'react';

const imgUrl = 'https://image.tmdb.org/t/p/w1280/';

const Movie = ({title, overview, poster_path, release_date, vote_average}) => {
    return (
        <div className="movie">
            <img src={imgUrl + poster_path} alt={title}/>
            <div className="movie-info">
                <h3>{title}</h3>
                <span>{vote_average}</span>
            </div>
            <div className="overview">
                <h2>Overview:</h2>
                <p>{overview}</p>
            </div>
        </div>
    )
}

export default Movie;