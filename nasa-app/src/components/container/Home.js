import React, { useState, useEffect } from "react"
import MediaCard from "./media/MediaCard"
import "../../styles/home.css"
import Loader from "../utils/Loader"
const axios = require("axios")

export default function Home(props) {
  const tabName = "home"
  const [apod, setAPOD] = useState({})
  const [isLoading, setIsLoading] = useState(false)

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
      {isLoading ? <Loader /> : <MediaCard media={apod} tabName={tabName} />}
    </div>
  )
}
