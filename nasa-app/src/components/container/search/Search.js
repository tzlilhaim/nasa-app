import React, { useState, useEffect } from "react"
import SearchBar from "./SearchBar"
import Loader from "../../utils/Loader"
import MediaCard from "../media/MediaCard"
import "../../../styles/search.css"
const axios = require("axios")

export default function Search(props) {
  const tabName = "search"
  const [search, setSearch] = useState("")
  const [isSearched, setIsSearched] = useState(false)
  const [medias, setMedias] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const handleClick = () => {
    const getMediasBySearch = async () => {
      setIsLoading(true)
      await axios.get(`${props.serverUrl}/search/${search}`).then((medias) => {
        setMedias([...medias.data])
      })
      setIsLoading(false)
      setIsSearched(true)
    }
    getMediasBySearch()
  }

  return (
    <div id="search-page">
      <SearchBar
        setSearch={setSearch}
        setIsSearched={setIsSearched}
        handleClick={handleClick}
      ></SearchBar>
      <div id="search-results">
        {isLoading ? (
          <Loader />
        ) : isSearched ? (
          medias.map((media, index) => {
            return (
              <MediaCard
                key={`search-result-${index}`}
                media={media}
                tabName={tabName}
                toggleLikeDislike={props.toggleLikeDislike}
                isSearched={isSearched}
              />
            )
          })
        ) : (
          <div>Enter keywords to search for images</div>
        )}
      </div>
    </div>
  )
}
