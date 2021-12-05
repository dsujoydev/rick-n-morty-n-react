import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Card.css";

function Card() {
  let [fetchedData, setFetchedData] = useState([]);

  let api_url = `https://rickandmortyapi.com/api/character`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api_url).then((res) => res.json());
      setFetchedData(data.results);
    })();
  }, [api_url]);

  console.log(fetchedData);

  return (
    <div characters-main> <h1>Rick n Morty</h1>
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
    </div>
    
  );
}

export default Card;
