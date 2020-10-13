import React from "react"
import SentimentDissatisfiedIcon from "@material-ui/icons/SentimentDissatisfied"
import "../../styles/utils.css"

export default function EmptyState(props) {
  const empty = {
    search: "No images were found. Please change your search",
    favourites: "There aren't any saved images yet",
    default: "Nothing to see here",
  }

  let pathName = `${window.location.pathname.replace("/", "")}` || "default"
  return (
    <div className="empty-state">
      <SentimentDissatisfiedIcon></SentimentDissatisfiedIcon>
      <h4>{empty[pathName]}</h4>
    </div>
  )
}
