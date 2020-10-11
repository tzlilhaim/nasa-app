import React from "react"
//import "../../styles/likeDislikeBtn.css"

export default function LikeDislikeBtn(props) {
  const handleClick = () => {
    console.log(props)
    props.state.btnFunc({ ...props.media })
    props.setDisabled(true)
  }
  return (
    <button
      className="like-dislike-btn"
      disabled={props.state.disabled}
      onClick={handleClick}
    >
      {props.state.btnText}
    </button>
  )
}
