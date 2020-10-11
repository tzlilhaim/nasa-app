import React from "react"

export default function Media(props) {
  return (
    <div className="media">
      <h3>{props.media.title}</h3>
      {props.media.url.includes("https://www.youtube.com/watch?v=") ? (
        <iframe
          className="media-video"
          src={props.media.url}
          title={props.media.title}
        ></iframe>
      ) : (
        <img
          className="media-image"
          src={props.media.url}
          alt={props.media.title}
        ></img>
      )}
    </div>
  )
}
