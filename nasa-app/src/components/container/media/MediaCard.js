import React, { useState, useEffect } from "react"
import Media from "./Media"
import EmptyState from "../../utils/EmptyState"
import LikeDislikeBtn from "./LikeDislikeBtn"
import Description from "./Description"
import "../../../styles/mediaCard.css"

export default function MediaCard(props) {
  const [likeDislikeBtn, setLikeDislikeBtn] = useState({
    btnShow: false,
    btnText: "",
    btnFunc: null,
  })
  const [isDisabled, setDisabled] = useState(false)
  const [media, setMedia] = useState({
    ...props.media,
    isLiked: props.tabName === "favourites",
    disabled: isDisabled,
  })
  const [showDescription, setShowDiscription] = useState(false)

  useEffect(() => {
    let showBtn = false,
      text = "",
      func = null,
      showDesc = false
    if (props.tabName === "search" || props.tabName === "favourites") {
      showBtn = true
      if (showBtn) {
        text = media.isLiked ? "-" : "+"
        func = media.isLiked
          ? props.toggleLikeDislike.dislike
          : props.toggleLikeDislike.like
      }
    } else {
      showDesc = true
    }
    setLikeDislikeBtn({ btnShow: showBtn, btnFunc: func, btnText: text })
    setShowDiscription(showDesc)
  }, [props, media])

  return (
    <div className="media-card">
      {props.media.url ? (
        <Media media={props.media} />
      ) : props.isSearched ? (
        <EmptyState />
      ) : (
        <div></div>
      )}
      {likeDislikeBtn.btnShow ? (
        <LikeDislikeBtn
          state={likeDislikeBtn}
          setDisabled={setDisabled}
          media={media}
        />
      ) : null}
      {showDescription ? <Description text={props.media.description} /> : null}
    </div>
  )
}
