import React from "react"
import "../../../styles/search.css"

export default function SearchBar(props) {
  return (
    <input id="search" placeholder="Search" onChange={props.onChange}></input>
  )
}
