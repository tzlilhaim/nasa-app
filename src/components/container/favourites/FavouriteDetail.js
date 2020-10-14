import React, { useState, useEffect } from "react"
import { Redirect, Link } from "react-router-dom"
import "../../../styles/favouriteDetail.css"
import MediaCard from "../media/MediaCard"
import EmptyState from "../../utils/EmptyState"
import Loader from "../../utils/Loader"
const axios = require("axios")

export default function Favourite(props) {
  const favouriteId = props.match.params.id
  const [favourite, setFavourite] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const getFavouriteById = async () => {
      setIsLoading(true)
      await axios
        .get(`${props.serverUrl}/images/${favouriteId}`)
        .then((favouriteImage) => {
          favouriteImage = favouriteImage.data
          if (favouriteImage.description.includes("<")) {
            favouriteImage.description = favouriteImage.description.split(
              "<"
            )[0]
          }
          setFavourite(favouriteImage)
        })
      setIsLoading(false)
    }
    getFavouriteById()
  }, [props, favouriteId])

  return favourite ? (
    <div id="favourite-detail" data-id={favourite.id}>
      <Link to={`/favourites`} className="back-btn">
        {"< Back"}
      </Link>
      <div className="sub-container">
        {isLoading ? (
          <Loader />
        ) : favourite.url ? (
          <MediaCard
            media={favourite}
            toggleLikeDislike={props.toggleLikeDislike}
          ></MediaCard>
        ) : (
          <EmptyState />
        )}
      </div>
    </div>
  ) : (
    <Redirect to={`/favourites`} />
  )
}
