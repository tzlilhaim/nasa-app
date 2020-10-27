import React from "react"
import { Button, Input } from "@material-ui/core"
import SearchIcon from "@material-ui/icons/Search"
import "../../../styles/search.css"

export default function SearchBar(props) {
  const onChangeInput = (e) => {
    props.setSearch(e.target.value)
  }
  return (
    <div id="search-bar">
      <Input
        className="search"
        placeholder="Search"
        onChange={onChangeInput}
      ></Input>
      <Button
        variant="contained"
        color="secondary"
        startIcon={<SearchIcon />}
        onClick={props.handleClick}
        disabled={props.isSearchEmpty}
      ></Button>
    </div>
  )
}
