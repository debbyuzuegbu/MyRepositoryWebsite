import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import {
  InputButton,
  Input,
  Button,
  SearchText,
  SearchContent,
} from "./SearchPage.styles";

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
    <SearchContent>
      <SearchText>Repo Search</SearchText>
      <InputButton>
        <Input
          type="text"
          placeholder="Search for your github profile here"
          value={searchInput}
          onChange={handleChange}
        />
          <Button onClick={handleClick}>Search</Button>
      </InputButton>
      <Results repos={repos} />
    </SearchContent>
  );
}

export default Searchbar;
