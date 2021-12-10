import Pagination from "../Pagination/Pagination";
import Search from "../Search/Search";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Card.css";

function Card() {
  let [fetchedData, setFetchedData] = useState([]);
  let [fetchedInfo, setFetchedInfo] = useState();
  let [search, setSearch] = useState("")
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
    <div characters-main>
      <h1>Rick n Morty</h1>
      <Search setSearch={setSearch} />
      <div className="character-list">
        {/* <Card results= {results}/> */}

        {fetchedData.map((items) => (
          // <div className="card-data">
          //   <h1 className="item-name">
          //     {items.name}
          //   </h1>
          //   <img src= {items.image} alt=""/>
          // </div>

          <li key={items.id} className="character-item">
            <Link to={`/${items.id}`}>
              <div className="character-card">
                <div className="img-container">
                  <img src={items.image} alt={items.name} />
                </div>
                <div className="name-container">
                  <h6>{items.name}</h6>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </div>
      <Pagination
        info={info}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
    </div>
  );
}

export default Card;
