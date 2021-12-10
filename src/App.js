import React, { useState, useEffect } from "react";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Card from "./components/Cards/Card";
import SingleChar from "./components/Cards/SingleChar";

import "./App.css";

function App() {
  // let [fetchedData, setFetchedData] = useState([]);

  // let api_url = `https://rickandmortyapi.com/api/character`;

  // useEffect(() => {
  //   (async function () {
  //     let data = await fetch(api_url).then((res) => res.json());
  //     setFetchedData(data.results);
  //   }) ();
  // }, [api_url]);

  // useEffect (async () => {
  //   const data = await axios (
  //     'https://rickandmortyapi.com/api/character',);
  //   setFetchedData (data.results)
  // },[api_url])

  // useEffect(() => {
  //    const axiosPosts = async () => {
  //      const response = await axios (`https://rickandmortyapi.com/api/character`);
  //      setFetchedData(response.results)
  //    };
  //     axiosPosts();
  // }, [])

  // useEffect(() => {
  //   (async function () {
  //     let data = await fetch(api_url).then((res) => res.json());
  //     setFetchedData(data.results);
  //   })();
  // }, [api_url]);

  // console.log(fetchedData);

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/:id" element = {<SingleChar />}/>
          <Route path="/" element={<Card/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
