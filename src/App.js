import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Card from "./components/Cards/Card";
import SingleChar from "./components/Cards/SingleChar";
import Pagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";
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

  let [fetchedData, setFetchedData] = useState([]);
  let [fetchedInfo, setFetchedInfo] = useState();
  let [search, setSearch] = useState("");
  let [pageNumber, setPageNumber] = useState(1);

  let api_url = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api_url).then((res) => res.json());
      setFetchedData(data.results);
      setFetchedInfo(data.info);
    })();
  }, [api_url]);

  console.log(fetchedData);
  let { info } = setFetchedInfo;

  return (
    <div>
      <h1>Rick n Morty</h1>
      <Search setSearch={setSearch} />
      <Router>
        <Routes>
          <Route path="/:id" element={<SingleChar />} />
          <Route
            path="/"
            element={
              <Card fetchedData={fetchedData} setFetchedData={setFetchedData} />
            }
          />
        </Routes>
      </Router>
      <Pagination
        info={info}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
    </div>
  );
}

export default App;
