import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
        <div className="card">
      {/* <Card results= {results}/> */}
      Rick n Morty
      {fetchedData.map((items) => (
        // <div className="card-data">
        //   <h1 className="item-name">
        //     {items.name}
        //   </h1>
        //   <img src= {items.image} alt=""/>
        // </div>

        <li key={items.id} className="character-item">
            <Link to={`/${items.id}`}>
              <div>
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
    )
}

export default Card

