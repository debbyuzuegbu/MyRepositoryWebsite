import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { MyContextApi } from "../App";
import { Link } from "react-router-dom";

import {
  MyRepoCardContent,
  MyRepoCard,
  MyRepoCardTitle,
  MyRepoCardText,
  Button,
} from "./MyRepo.styles";

function MyRepo() {
  const [repos, setRepos] = useContext(MyContextApi);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [numberOfPost] = useState(5);
  const fetchRepos = async () => {
    try {
      setLoading(true);
      const result = await axios(
        "https://api.github.com/users/debbyuzuegbu/repos"
      );
      setRepos(result.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchRepos();
  }, []);
  const pages = 6;
  const lastIndexPage = numberOfPost * page;
  const firstIndexPage = lastIndexPage - numberOfPost;
  const currentPost = repos.slice(firstIndexPage, lastIndexPage);
  console.log(repos)
  return (
    <div>
            <MyRepoCardContent>
              {loading ? (
                <h3>Loading...</h3>
              ) : (
                repos &&
                currentPost.map((rep) => (
                  <MyRepoCard key={rep.id}>
                    <MyRepoCardTitle>{rep.name}</MyRepoCardTitle>
                    <MyRepoCardText>{rep.visibility}</MyRepoCardText>
                    <MyRepoCardText>{rep.forks}</MyRepoCardText>
                    <MyRepoCardText>{rep.created_at}</MyRepoCardText>
                    <MyRepoCardText style={{fontSize: "8px"}}>{rep.contributors_url}</MyRepoCardText>
                    <Link to={`/repo/${rep.id}`}>See More</Link>
                  </MyRepoCard>
                ))
              )}
          </MyRepoCardContent>
       <div style={{alignItems: "center", display: "flex", justifyContent: "center", padding:"20px"}}>
       <Button
          disabled={page <= 1 ? true : null}
          onClick={() => setPage((s) => Number(s) - 1)}
        >
         Prev
      </Button>
      {Array.from({ length: 6 }, (v, i) => i + 1).map((n) => (
          <Button key={n} onClick={(e) => setPage(e.target.value)} value={n}>
            {n}
         </Button>
        ))}
       <Button
          disabled={page >= pages ? true : null}
          onClick={() => setPage((s) => Number(s) + 1)}
        >
        Next
       </Button>
     </div>
    </div>
  );
}

export default MyRepo;
