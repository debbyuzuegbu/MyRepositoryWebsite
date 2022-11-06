import React, { useState, useContext } from "react";
import axios from "axios";
import { MyContextApi } from "../App";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import {
  WorksContainer,
  WorksContent,
  WorksTitle,
  WorksCardContent,
  WorksCard,
  WorksIconContainer,
  WorksIcon1,
  WorksIcon2,
  WorksIcon3,
  WorksCardTitle,
  WorksCardText,
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
      // use  the console to see the data you want to display
      //what next okay error boundary thats okaalyl
      //create the folder and files okay
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
            <div style={{marginTop:"1rem",display: "grid",columnGap: "0.1rem", rowGap: "1rem", gridTemplateColumns: "auto auto auto", padding:"2rem"}}>
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
          </div>
       <div>
       <button
          disabled={page <= 1 ? true : null}
          onClick={() => setPage((s) => Number(s) - 1)}
        >
         Prev
      </button>
      {Array.from({ length: 6 }, (v, i) => i + 1).map((n) => (
          <button key={n} onClick={(e) => setPage(e.target.value)} value={n}>
            {n}
         </button>
        ))}
       <button
          disabled={page >= pages ? true : null}
          onClick={() => setPage((s) => Number(s) + 1)}
        >
        Next
       </button>
     </div>
    </div>
  );
}

export default MyRepo;
