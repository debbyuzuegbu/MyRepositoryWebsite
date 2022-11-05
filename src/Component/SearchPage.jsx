import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

function Searchbar() {
  const [searchInput, setSearchInput] = useState("");
  const [repos, setRepos] = useState([]);

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleClick = async () => {
    console.log(searchInput);
    try {
      const result = await axios("https://api.github.com/users/debbyuzuegbu/repos");
      console.log(result)
      
    } catch (err) {
      console.log(err);
    }
  };
  handleClick()

  return (
    <div>
    <div style={{ padding: "220px" }}>
      <input
        type="text"
        placeholder="search"
        value={searchInput}
        onChange={handleChange}
      ></input>
      <button onClick={handleClick}>Search</button>
    </div>
    <Results />
    </div>
  );
}

export default Searchbar;
