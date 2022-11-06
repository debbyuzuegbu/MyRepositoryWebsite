import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import { Button } from "../MyRepository/MyRepo.styles";

function Searchbar() {
  const [searchInput, setSearchInput] = useState("");
  const [repos, setRepos] = useState([]);

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleClick = async () => {
    console.log(searchInput);
    try {
      const result = await axios(
        `https://api.github.com/users/${searchInput}/repos`
      );
      console.log(result);
      setRepos(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ padding: "2rem", height: "200vh"}}>
      <div style={{display: "flex"}}>
        <input style={{padding: "0.6rem", marginRight: "10px", borderRadius: "10px"}}
          type="text"
          placeholder="search"
          value={searchInput}
          onChange={handleChange}
        ></input>
        <Button onClick={handleClick}>Search</Button>
      </div>
      <Results repos={repos} />
    </div>
  );
}

export default Searchbar;
