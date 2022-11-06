import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import SingleRepo from "./MyRepository/SingleRepo";
import MyRepo from "./MyRepository/MyRepo";
import Page from "./Page";
import Footer from "./Footer/Footer";
import Errorbound from "./Errorboundary/Errorboundary";
import Error from "./404";
import About from "./About/About";
import axios from "axios";

export const MyContextApi = React.createContext([]);

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

function App() {
  const [repos, setRepos] = useState([]);
  const [explode, setExplode] = useState(false);
  const [loading, setLoading] = useState(false);
  const fetchRepos = async () => {
    try {
      setLoading(true);
      const result = await axios(
        "https://api.github.com/users/debbyuzuegbu/repos"
      );
      setRepos(result.data);
      console.log(setRepos)
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchRepos();
    console.log("here")
  }, []);

  return (
    <MyContextApi.Provider value={[repos, setRepos]}>
      <div>
        <Navbar />
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
          onReset={() => setExplode(false)}
          resetKeys={[explode]}
        >
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/repo" element={<MyRepo />}></Route>
            <Route path="/repo/:id" element={<SingleRepo />}></Route>
            <Route path="/repository" element={<Page />}></Route>
            <Route path="/errorboundary" element={<Errorbound />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="*" element={<Error />}></Route>
          </Routes>
        </ErrorBoundary>
        <Footer />
      </div>
    </MyContextApi.Provider>
  );
}

export default App;
