import React, { useState, useEffect } from "react"
import MediaCard from "../media/MediaCard"
import "../../../styles/home.css"
import Loader from "../../utils/Loader"
import EmptyState from "../../utils/EmptyState"
const axios = require("axios")

export default function Home(props) {
  const [apod, setAPOD] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    const pathName = `${window.location.pathname.replace("/", "")}`
    props.setActivePath(pathName)
  }, [props])

  useEffect(() => {
    const getAPOD = async () => {
      setIsLoading(true)
      await axios
        .get(`${props.serverUrl}/apod`)
        .then((astronomyPictureOfDay) => {
          setAPOD(astronomyPictureOfDay.data)
        })
      setIsLoading(false)
    }
    getAPOD()
  }, [props])
  return (
    <div id="home">
      {isLoading ? (
        <Loader />
      ) : apod.url ? (
        <MediaCard media={apod} toggleLikeDislike={props.toggleLikeDislike} />
      ) : (
        <EmptyState />
      )}
    </div>
  )
}
