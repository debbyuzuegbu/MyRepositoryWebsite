import React, { useState, useContext } from "react";
import axios from "axios";
import { MyContextApi } from "../App";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import {
  WorksCardContent,
  WorksCard,
  WorksCardTitle,
  WorksCardText,
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
            <WorksCardContent>
              {loading ? (
                <h3>Loading...</h3>
              ) : (
                repos &&
                currentPost.map((rep) => (
                  <WorksCard key={rep.id}>
                    <WorksCardTitle>{rep.name}</WorksCardTitle>
                    <WorksCardText>{rep.visibility}</WorksCardText>
                    <WorksCardText>{rep.forks}</WorksCardText>
                    <WorksCardText>{rep.created_at}</WorksCardText>
                    <WorksCardText style={{fontSize: "8px"}}>{rep.contributors_url}</WorksCardText>
                    <Link to={`/repo/${rep.id}`}>See More</Link>
                  </WorksCard>
                ))
              )}
          </WorksCardContent>
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
