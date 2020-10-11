import React, { useState } from "react"
import SearchBar from "./SearchBar"
import Loader from "../../utils/Loader"
import MediaCard from "../media/MediaCard"
import "../../../styles/search.css"
import EmptyState from "../../utils/EmptyState"
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
      let medias = await axios.get(`${props.serverUrl}/search/${search}`)
      medias = medias.data.map((m) => {
        m["isLiked"] = false
        return m
      })
      setMedias([...medias])
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
        isSearchEmpty={!search.length}
      ></SearchBar>
      <div id="search-results">
        {isLoading ? (
          <Loader />
        ) : isSearched ? (
          medias.length ? (
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
            <EmptyState tabName={tabName} />
          )
        ) : (
          <div>Enter keywords to search for images</div>
        )}
      </div>
    </div>
  )
}
