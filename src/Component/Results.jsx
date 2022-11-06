import React from "react";

const Results = (props) => {
  const { repos } = props;
  console.log("Results", repos);
  const listRepos = repos.length ? (
    repos.map((item) => <li><a href={item.clone_url}>{item.name}</a></li>)
  ) : (
    <li>No repos found</li>
  );

  return ( <div>{listRepos}</div>);
};

export default Results;
