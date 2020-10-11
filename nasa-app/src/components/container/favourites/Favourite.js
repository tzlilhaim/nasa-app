import React from "react"
import { Redirect } from "react-router-dom"
import "../../../styles/favourite.css"
import MediaCard from "../media/MediaCard"

export default function Favourite(props) {
  //const favouriteId = props.match.params.id

  /* 
  return favourite ? (
    <div id="movie-detail" data-id={movie.id}>
      <Budget budget={props.budget} />
      <Link to={`/catalog`} className="back-btn">
        {"< Back"}
      </Link>
      <h2 className="movie-title-year">
        {movie.title} ({movie.year})
      </h2>
      <Movie movie={movie} toggleRentedStatus={props.toggleRentedStatus} />
      <div className="movie-description">
        <h4>Plot Summary:</h4> <p>{movie.descrShort}</p>
      </div>
    </div>
  ) : (
    <Redirect to={`/catalog`} />
  )
} */

  const isFound = false
  return isFound ? (
    <div className="favourite">
      <MediaCard />
    </div>
  ) : (
    <Redirect to={`/favourites`} />
  )
}
