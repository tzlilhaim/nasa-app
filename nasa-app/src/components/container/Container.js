import React, { useState, useEffect } from "react"
import {
  BrowserRouter as Router,
  Route,
  Redirect,
} from "react-router-dom"
import "../../styles/container.css"
import Home from "./Home"
import Search from "./search/Search"
import Favourites from "./favourites/Favourites"
import Favourite from "./favourites/Favourite"

export default function Container(props) {
  const [activeTab, setActiveTab] = useState(props.match.params.tab || "home")
  const setAsActiveTab = (tabName) => {
    setActiveTab(tabName)
  }
  useEffect(() => {
    setActiveTab(props.match.params.tab || "home")
  }, [props])

  return (
    <Router>
      <div id="container">
        {activeTab === "home" ? (
          <Redirect to={"/home"} />
        ) : activeTab === "search" ? (
          <Redirect to={"/search"} />
        ) : activeTab === "favourites" ? (
          <Redirect to={"/favourites"} />
        ) : (
          <Redirect to={"/home"} />
        )}
        <Route
          exact
          path="/home"
          render={() => (
            <Home
              activeTab={activeTab}
              setAsActiveTab={setAsActiveTab}
              serverUrl={props.serverUrl}
            />
          )}
        />
        <Route
          exact
          path="/search"
          render={() => (
            <Search
              activeTab={activeTab}
              serverUrl={props.serverUrl}
              setAsActiveTab={setAsActiveTab}
              toggleLikeDislike={props.toggleLikeDislike}
            />
          )}
        />
        <Route
          exact
          path="/favourites"
          render={() => (
            <Favourites
              activeTab={activeTab}
              serverUrl={props.serverUrl}
              setAsActiveTab={setAsActiveTab}
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
              setAsActiveTab={setAsActiveTab}
              toggleLikeDislike={props.toggleLikeDislike}
            />
          )}
        ></Route>
      </div>
    </Router>
  )
}
