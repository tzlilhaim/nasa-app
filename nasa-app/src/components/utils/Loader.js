import React from "react"
import "../../styles/utils.css"
import { CircularProgress } from "@material-ui/core"


export default function Loader(props) {
  return (
    <div className="loading-state">
      <CircularProgress></CircularProgress>
    </div>
  )
}
