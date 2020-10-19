import React from "react"
import { Route, Redirect } from "react-router-dom"
import "../../styles/container.css"
import backgroundVideo from "../assets/background.webm"
import Home from ".//home/Home"
import Search from ".//search/Search"
import Favourites from "./favourites/Favourites"
import Favourite from "./favourites/FavouriteDetail"

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
            toggleLikeDislike={props.toggleLikeDislike}
            favourites={props.favourites}
            setActivePath={props.setActivePath}
          />
        )}
      />
      <Route
        exact
        path="/favourite/:id"
        render={({ match }) => (
          <Favourite
            match={match}
            toggleLikeDislike={props.toggleLikeDislike}
            serverUrl={props.serverUrl}
          />
        )}
      ></Route>
      {props.activePath === "/" ? <Redirect to="/home" /> : null}
    </div>
  )
}
