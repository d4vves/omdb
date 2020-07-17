import React from 'react'

const FilmPoster = (props) => {
    return <img src={`https://image.tmdb.org/t/p/w780${props.posterPath}`} alt={`${props.title} movie poster.`} />
}

export default FilmPoster