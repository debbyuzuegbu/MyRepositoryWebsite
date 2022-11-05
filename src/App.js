import React, {useState} from "react";
import { Routes, Route } from "react-router-dom";
import {ErrorBoundary} from 'react-error-boundary'
import "./App.css";
import Navbar from "./Navbar/Navbar";
import Home from "./Component/Home";
import SingleRepo from "./MyRepository/SingleRepo";
import MyRepo from "./MyRepository/MyRepo";
import Page from "./Component/Page";
import Footer from "./Footer/Footer";
import Errorbound from "./Errorboundary/Errorboundary";

export const MyContextApi = React.createContext([]);

function ErrorFallback({error, resetErrorBoundary}) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}

function App() {
  const [repos, setRepos] = useState([]);
  const [explode, setExplode] = useState(false)
  return (
    <MyContextApi.Provider value={[repos,setRepos]}>
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
        </Routes>
        </ErrorBoundary>
        <Footer />
      </div>
    </MyContextApi.Provider>
  );
}

export default App;
