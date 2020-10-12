import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from "./home/Home"
import Search from "./search/Search"
import Favourites from "./favourites/Favourites"
import Favourite from "./favourites/Favourite"
import "../../styles/container.css"
import backgroundVideo from "./assets/background.webm"

export default function Container(props) {
  const [tab, setTab] = useState(props.match.params.tab)

  useEffect(() => {
    setTab(props.match.params.tab)
  }, [props])
  props.setActiveTab(tab)

  return (
    <div id="container">
      <video autoPlay muted loop id="background-video">
        <source src={backgroundVideo} type="video/webm"></source>
      </video>
      <Router>
        <Route
          exact
          path="/home"
          render={() => (
            <Home
              serverUrl={props.serverUrl}
              toggleLikeDislike={props.toggleLikeDislike}
            />
          )}
        />
        <Route
          exact
          path="/search"
          render={() => (
            <Search
              serverUrl={props.serverUrl}
              toggleLikeDislike={props.toggleLikeDislike}
            />
          )}
        />
        <Route
          exact
          path="/favourites"
          render={() => (
            <Favourites
              serverUrl={props.serverUrl}
              toggleLikeDislike={props.toggleLikeDislike}
              favourites={props.favourites}
            />
          )}
        />
        <Route
          exact
          path="/favourites/:id"
          render={({ match }) => (
            <Favourite
              match={match}
              favourites={props.favourites}
              serverUrl={props.serverUrl}
              toggleLikeDislike={props.toggleLikeDislike}
            />
          )}
        ></Route>
      </Router>
      {/* {tab === "home" ? (
        <Redirect to={"/home"} />
      ) : tab === "search" ? (
        <Redirect to={"/search"} />
      ) : tab === "favourites" ? (
        <Redirect to={"/favourites"} />
      ) : (
        <Redirect to={"/home"} />
      )} */}
    </div>
  )
}
