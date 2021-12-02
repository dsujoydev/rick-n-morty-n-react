import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  let [fetchedData, setFetchedData] = useState([]);

  let api_url = `https://rickandmortyapi.com/api/character`;

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

  useEffect(() => {
    (async function () {
      let data = await fetch(api_url).then((res) => res.json());
      setFetchedData(data.results);
    })();
  }, [api_url]);

  console.log(fetchedData);

  return (
    <div className="App">
      {/* <Card results= {results}/> */}
      Rick n Morty
      {fetchedData.map((items) => (
        <div>
          <h1>
            {items.name}
          </h1>
          <img src= {items.image} alt=""/>
          
        </div>
        
      ))}
    </div>
  );
}

export default App;
