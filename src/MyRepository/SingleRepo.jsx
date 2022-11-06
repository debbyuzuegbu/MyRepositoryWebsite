import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { MyContextApi } from "../App";

function SingleRepo() {
  const { id } = useParams();
  const [repo, setRepo] = useState([]);
  const [repos] = useContext(MyContextApi);
  const fetchSingleRepo = async () => {
    const getSingleRepo = await repos.filter(
      (value) => value.id === Number(id)
    );
    setRepo(getSingleRepo);
  };
  useEffect(() => {
    fetchSingleRepo();
  }, []);

  return (
    <div style={{ display: "flex", padding: "4rem", height: "100vh", justifyContent: "center" }}>
      {repo &&
        repo.map((per) => (
          <div
            key={per.id}
            style={{
              backgroundColor: "#0b0e14",
              color: "#fff",
              padding: "5rem",
            }}
          >
            {per.name}
            <p>
              <img
                style={{ height: "10rem" }}
                alt="Debby's face"
                src={per.owner.avatar_url}
              />
            </p>
            <p>{per.owner.login}</p>
            <p>{per.owner.visibility}</p>
            <p>Stargazers Count: {per.stargazers_count}stargazers</p>
            <p>Watchers Count: {per.watchers_count}watchers</p>
            <p> Forks: {per.fork}fork</p>
            <a href={per.svn_url} style={{ color: "#fff" }}>
              view repo
            </a>
          </div>
        ))}
    </div>
  );
}

export default SingleRepo;
