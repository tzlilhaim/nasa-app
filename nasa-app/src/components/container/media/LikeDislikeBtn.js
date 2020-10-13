import React, { useState, useEffect } from "react"
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt"
import ThumbDownIcon from "@material-ui/icons/ThumbDown"

export default function LikeDislikeBtn(props) {
  const [btn, setBtn] = useState({
    icon: props.media.isLiked ? <ThumbDownIcon /> : <ThumbUpAltIcon />,
    func: props.media.isLiked
      ? props.toggleLikeDislike.dislike
      : props.toggleLikeDislike.like,
  })
  const handleClick = async () => {
    const updatedMedia = await btn.func({ ...props.media })
    props.setMedia(updatedMedia)
  }

  useEffect(() => {
    setBtn({
      icon: props.media.isLiked ? <ThumbDownIcon /> : <ThumbUpAltIcon />,
      func: props.media.isLiked
        ? props.toggleLikeDislike.dislike
        : props.toggleLikeDislike.like,
    })
  }, [props])

  return (
    <button className="like-dislike-btn" onClick={handleClick}>
      {btn.icon}
    </button>
  )
}
