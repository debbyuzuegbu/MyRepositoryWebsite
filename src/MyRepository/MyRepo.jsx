import React, { useState, useContext } from "react";
import axios from "axios";
import { MyContextApi } from "../App";
import { useEffect } from "react";
import { Link } from "react-router-dom";

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
  return (
    <div>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        repos &&
        currentPost.map((rep) => (
          <div key={rep.id}>
            <p>{rep.name}</p>
            <p>{rep.visibility}</p>
            <Link to={`/repo/${rep.id}`}>See More</Link>
          </div>
        ))
      )}
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
