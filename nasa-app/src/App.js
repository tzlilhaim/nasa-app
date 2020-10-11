import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import "./styles/App.css"
import { Snackbar, IconButton } from "@material-ui/core"
import NavBar from "./components/navBar/NavBar"
import Container from "./components/container/Container"
const axios = require("axios")

export default function App() {
  const SERVER_PORT = 5000
  const [serverUrl, setServerUrl] = useState(`http://localhost:${SERVER_PORT}`)
  const [snackBarOpen, setSnackBarOpen] = useState(false)
  const [snackBarMsg, setSnackBarMsg] = useState("")
  const [favourites, setFavourites] = useState([])

  const toggleLikeDislike = {
    async like(media) {
      const updateFavourites = await axios.post(`${serverUrl}/image`, media)
      setFavourites(updateFavourites)
      setSnackBarMsg(`Saved image to favourites successfully!`)
      setSnackBarOpen(true)
    },
    async dislike(media) {
      const updateFavourites = await axios.delete(
        `${serverUrl}/image/${media._id}`
      )
      setFavourites(updateFavourites)
      setSnackBarMsg(`Deleted image from favourites successfully!`)
      setSnackBarOpen(true)
    },
  }

  const snackBarClose = (event) => {
    setSnackBarOpen(false)
  }

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
          render={({ match }) => (
            <Container
              match={match}
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
