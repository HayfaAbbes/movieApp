import React from 'react'
import StarRating from './StarRating'

const MovieCard = ({movies}) => {
  return (
    <div className='Movie-Card'>
        <StarRating rating={movies.rating}/>
        <img src={movies.image} alt=""/>
        <h3>{movies.name}</h3>
       
        <p>{movies.data}</p>


    </div>
  )
}

export default MovieCard