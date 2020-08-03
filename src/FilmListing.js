import React, { useState } from 'react'
import FilmRow from './FilmRow'

const FilmListing = (props) => {
    const [filter, setFilter] = useState('all')
    const [faves, setFaves] = useState([])

    const handleFavToggle = (film) => {
        let newFaves = [...faves]
        const filmIndex = newFaves.indexOf(film)
        if (filmIndex < 0) {
            newFaves = [...newFaves, film]
        } else {
            newFaves.splice(filmIndex, 1)
        }
        setFaves(newFaves)
    }

    const filmsToDisplay = filter === 'all' ? props.films : faves

    const allFilms = filmsToDisplay.map((film, i) => {
        return <FilmRow
                    film={film}
                    key={`filmRow-${i}`}
                    onFaveToggle={handleFavToggle}
                    isFave={faves.includes(film)}
                    handleDetailsClick={props.handleDetailsClick}
                />
    })

    return (
        <div className="film-list">
            <h1 className="section-title">FILMS</h1>
            <div className="film-list-filters">
                <div className={`film-list-filter ${filter === 'all' ? 'is-active' : ''}`} onClick={() => setFilter('all')}>
                    ALL
                    <span className="section-count">{props.films.length}</span>
                </div>
                <div className={`film-list-filter ${filter === 'faves' ? 'is-active' : ''}`} onClick={() => setFilter('faves')}>
                    FAVES
                    <span className="section-count">{faves.length}</span>
                </div>
            </div>
            {allFilms}
        </div>
    );
}

export default FilmListing