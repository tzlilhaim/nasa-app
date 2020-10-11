import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import "./styles/App.css"
import { Snackbar, IconButton } from "@material-ui/core"
import NavBar from "./components/navBar/NavBar"
import Container from "./components/container/Container"
import Home from "./components/container/home/Home"
import Search from "./components/container/search/Search"
import Favourites from "./components/container/favourites/Favourites"
import Favourite from "./components/container/favourites/Favourite"
const axios = require("axios")

export default function App() {
  const SERVER_PORT = 5000
  const serverUrl = `http://localhost:${SERVER_PORT}`
  const [snackBarOpen, setSnackBarOpen] = useState(false)
  const [snackBarMsg, setSnackBarMsg] = useState("")
  const [favourites, setFavourites] = useState([])

  const toggleLikeDislike = {
    async like(media) {
      let updateFavourites = await axios.post(`${serverUrl}/image`, media)
      updateFavourites = updateFavourites.data
      updateFavourites.map((f) => (f["isLiked"] = true))
      setFavourites(updateFavourites)
      setSnackBarMsg(`Saved image to favourites successfully!`)
      setSnackBarOpen(true)
      const favourite = updateFavourites.find((f) => f.url === media.url)
      return favourite
    },
    async dislike(media) {
      const mediaId = media._id
      await axios.delete(`${serverUrl}/image/${mediaId}`)
      const updateFavourites = [...favourites]
      const favourite = updateFavourites.find((f) => f._id === mediaId)
      favourite["isLiked"] = false
      setFavourites(updateFavourites)
      setSnackBarMsg(`Deleted image from favourites successfully!`)
      setSnackBarOpen(true)
      return favourite
    },
  }

  const snackBarClose = (event) => {
    setSnackBarOpen(false)
  }

  useEffect(() => {
    const getFavourites = async () => {
      const favouriteImages = await axios.get(`${serverUrl}/images/`)
      setFavourites(favouriteImages.data)
    }
    getFavourites()
  }, [serverUrl])

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Snackbar
          open={snackBarOpen}
          autoHideDuration={3000}
          onClose={snackBarClose}
          message={<span id="snackbar-msg">{snackBarMsg}</span>}
          action={
            <IconButton
              key="close"
              arial-label="Close"
              color="inherit"
              onClick={snackBarClose}
            >
              x
            </IconButton>
          }
        />
        <Route
          exact
          path="/:tab?"
          render={({ match }) => <Container match={match} />}
        />
        <Route
          exact
          path="/home"
          render={() => (
            <Home serverUrl={serverUrl} toggleLikeDislike={toggleLikeDislike} />
          )}
        />
        <Route
          exact
          path="/search"
          render={() => (
            <Search
              serverUrl={serverUrl}
              toggleLikeDislike={toggleLikeDislike}
            />
          )}
        />
        <Route
          exact
          path="/favourites"
          render={() => (
            <Favourites
              serverUrl={serverUrl}
              toggleLikeDislike={toggleLikeDislike}
              favourites={favourites}
            />
          )}
        />
        <Route
          exact
          path="/favourites/:id"
          render={({ match }) => (
            <Favourite
              match={match}
              favourites={favourites}
              serverUrl={serverUrl}
              toggleLikeDislike={toggleLikeDislike}
            />
          )}
        ></Route>
      </div>
    </Router>
  )
}
