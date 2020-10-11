import React, { useState, useEffect } from "react"
//import "../../styles/likeDislikeBtn.css"

export default function LikeDislikeBtn(props) {
  const [btn, setBtn] = useState({
    text: props.media.isLiked ? "-" : "+",
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
      text: props.media.isLiked ? "-" : "+",
      func: props.media.isLiked
        ? props.toggleLikeDislike.dislike
        : props.toggleLikeDislike.like,
    })
  }, [props])

  return (
    <button className="like-dislike-btn" onClick={handleClick}>
      {btn.text}
    </button>
  )
}
