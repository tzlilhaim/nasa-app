import React from "react"

export default function Media(props) {
  const handleClick = () => {
    props.likeDislikeBtn.btnFunc({ ...props.media })
  }
  return (
    <div className="media">
      {props.media.url.includes("https://www.youtube.com/watch?v=") ? (
        <iframe className="media-video" src={props.media.url}></iframe>
      ) : (
        <img className="media-image" src={props.media.url}></img>
      )}
      {props.showDescription ? (
        <p className="media-description">{props.media.description}</p>
      ) : null}
      {props.likeDislikeBtn.showBtn ? (
        <button className="like-dislike-btn" onClick={handleClick}>
          {props.likeDislikeBtn.btnText}
        </button>
      ) : null}
    </div>
  )
}
