import React from "react";
import { ListStyle } from './SearchPage.styles';

const Results = (props) => {
  const { repos } = props;
  console.log("Results", repos);
  const listRepos = repos.length ? (
    repos.map((item) => <li style={{marginLeft: "50px"}}><a style={{textDecoration: "none", color: "#fff"}} href={item.clone_url}>{item.name}</a></li>)
  ) : (
  <li style={{marginLeft: "50px"}}>No repos found</li>
  );

  return ( <ListStyle>{listRepos}</ListStyle>);
};

export default Results;
