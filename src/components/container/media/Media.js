import React from "react"

export default function Media(props) {
  let isVideo = props.media.url.includes("https://www.youtube.com")

  return (
    <div className="media">
      {isVideo ? (
        <iframe
          width="560"
          height="315"
          title="video-of-the-day"
          src={props.media.url}
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
