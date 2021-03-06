import React, { useState, useEffect } from "react"
import Media from "./Media"
import EmptyState from "../../utils/EmptyState"
import LikeDislikeBtn from "./LikeDislikeBtn"
import Description from "./Description"
import "../../../styles/mediaCard.css"
import { Link } from "react-router-dom"

export default function MediaCard(props) {
  const [showBtn, setShowBtn] = useState({
    btnShow: false,
  })
  const [media, setMedia] = useState({
    ...props.media,
  })
  const [showDescription, setShowDiscription] = useState(false)

  useEffect(() => {
    const pathName = `${window.location.pathname.replace("/", "")}`
    if (pathName === "search" || pathName === "favourites") {
      setShowBtn(true)
      setShowDiscription(false)
    } else {
      setShowDiscription(true)
      setShowBtn(false)
    }
  }, [props, media])
  return (
    <div className="media-card">
      <h2>{props.media.title}</h2>
      {props.media.url ? (
        props.media.isLiked ? (
          <Link
            to={`/favourite/${props.media._id}`}
            className="to-favourite-detail"
          >
            <Media media={props.media} />
          </Link>
        ) : (
          <Media media={props.media} />
        )
      ) : (
        <EmptyState />
      )}
      {showBtn ? (
        <LikeDislikeBtn
          media={media}
          setMedia={setMedia}
          toggleLikeDislike={props.toggleLikeDislike}
        />
      ) : null}
      {showDescription ? <Description text={props.media.description} /> : null}
    </div>
  )
}
