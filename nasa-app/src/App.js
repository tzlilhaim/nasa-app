import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import "./styles/App.css"
import { Snackbar, IconButton } from "@material-ui/core"
import NavBar from "./components/navBar/NavBar"
import Container from "./components/container/Container"
const axios = require("axios")

export default function App() {
  const SERVER_PORT = 5000
  const serverUrl = `http://localhost:${SERVER_PORT}`
  const [snackBarOpen, setSnackBarOpen] = useState(false)
  const [snackBarMsg, setSnackBarMsg] = useState("")
  const [favourites, setFavourites] = useState([])
  const [activeTab, setActiveTab] = useState("home")

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
      let favouriteImages = await axios.get(`${serverUrl}/images/`)
      favouriteImages = favouriteImages.data.map((f) => {
        f["isLiked"] = true
        return f
      })
      setFavourites(favouriteImages)
    }
    getFavourites()
  }, [serverUrl])

  return (
    <Router>
      <div className="App">
        <NavBar
          activeTab={activeTab}
        />
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
          render={({ match }) => (
            <Container
              match={match}
              setActiveTab={setActiveTab}
              serverUrl={serverUrl}
              toggleLikeDislike={toggleLikeDislike}
              favourites={favourites}
            />
          )}
        />
      </div>
    </Router>
  )
}
