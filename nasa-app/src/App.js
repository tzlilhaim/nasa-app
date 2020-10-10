import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import "./styles/App.css"
import { Snackbar, IconButton } from "@material-ui/core"
import Logo from "./components/logo/Logo"
import Home from "./components/container/Home"
import Search from "./components/container/search/Search"
import Favourites from "./components/container/favourites/Favourites"
import Favourite from "./components/container/favourites/Favourite"
import NavBar from "./components/navBar/NavBar"
import Container from "./components/container/Container"

export default function App() {
  const [activeTab, setActiveTab] = useState("home")
  const [snackBarOpen, setSnackBarOpen] = useState(false)
  const [snackBarMsg, setSnackBarMsg] = useState("")

  const snackBarClose = (event) => {
    setSnackBarOpen(false)
  }

  return (
    <Router>
      <div className="App">
        <Logo />
        <NavBar />
        <Container />
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
          path="/"
          render={() => (
            <Home
              setActiveTab={setActiveTab}
              isActiveTab={activeTab === "home"}
            />
          )}
        />
        <Route
          exact
          path="/search"
          render={() => (
            <Search
              setActiveTab={setActiveTab}
              isActiveTab={activeTab === "search"}
            />
          )}
        />
        <Route
          exact
          path="/favourites"
          render={() => (
            <Favourites
              setActiveTab={setActiveTab}
              isActiveTab={activeTab === "favourites"}
            />
          )}
        />
        <Route
          exact
          path="/favourites/:id"
          render={({ match }) => (
            <Favourite match={match} setActiveTab={setActiveTab} />
          )}
        ></Route>
      </div>
    </Router>
  )
}
