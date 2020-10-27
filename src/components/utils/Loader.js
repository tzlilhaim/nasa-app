import React, { useState } from "react"
import "../../styles/utils.css"
import "../../styles/rocketLoader.css"
import RocketLoader from "../assets/rocket-loader.png"
import { CircularProgress } from "@material-ui/core"

export default function Loader(props) {
  const [showingSpinnerLoader, setShowingSpinnerLoader] = useState(false)

  const showSpinnerLoader = () => {
    setShowingSpinnerLoader(true)
  }

  return (
    <div className="loading-state">
      {showingSpinnerLoader ? (
        <CircularProgress className="spinner-loader"></CircularProgress>
      ) : (
        <img
          className="rocket-loader"
          src={RocketLoader}
          onError={showSpinnerLoader}
        ></img>
      )}
    </div>
  )
}
