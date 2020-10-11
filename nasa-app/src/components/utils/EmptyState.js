import React from "react"
import "../../styles/utils.css"

export default function EmptyState(props) {
  const empty = {
    searchResults: "No images were found. Please change your search",
    favourites: "There aren't any saved images yet",
    default: "Nothing to see here",
  }
  return (
    <div className="empty-state">
      {props.tabName === "search"
        ? empty.searchResults
        : props.tabName === "favourites"
        ? empty.favourites
        : empty.default}
    </div>
  )
}
