import React from "react"
import { Route } from "react-router-dom"
import "../../styles/container.css"
import backgroundVideo from "./assets/background.webm"
import Home from ".//home/Home"
import Search from ".//search/Search"
import Favourites from "./favourites/Favourites"
import Favourite from "./favourites/Favourite"

export default function Container(props) {
  return (
    <div id="container">
      <video autoPlay muted loop id="background-video">
        <source src={backgroundVideo} type="video/webm"></source>
      </video>
      <Route
        exact
        path="/home"
        render={() => (
          <Home
            serverUrl={props.serverUrl}
            toggleLikeDislike={props.toggleLikeDislike}
            setActivePath={props.setActivePath}
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
            setActivePath={props.setActivePath}
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
            setActivePath={props.setActivePath}
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
            setActivePath={props.setActivePath}
          />
        )}
      ></Route>
    </div>
  )
}
