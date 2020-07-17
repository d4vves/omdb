import React, { useState } from 'react'
import './App.css'
import FilmListing from './FilmListing'
import FilmDetails from './FilmDetails'
import TMDB from './TMDB'

const App = () => {
  const [filmList, setFilmList] = useState(TMDB.films)
  const [current, setCurrent] = useState({})

  const handleDetailsClick = (film) => {
    setCurrent(film)
  }

  return (
    <div className="film-library">
      <FilmListing films={filmList} handleDetailsClick={handleDetailsClick} />
      <FilmDetails film={current} />
    </div>
  );
}

export default App;