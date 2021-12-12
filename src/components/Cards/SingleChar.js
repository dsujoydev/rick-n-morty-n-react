import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./SingleChar.css";

const SingleChar = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState([]);

  // useEffect(() => {
  //     (async function () {
  //         let apiData = await fetch (url).then((res)=> res.json());
  //         setCharacter(apiData);
  //     })();
  //     }, [id])

  useEffect(() => {
    const url = `https://rickandmortyapi.com/api/character/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((apiData) => {
        setCharacter(apiData);
      });
  }, [id]);

  return (
    <div className="char-container">
      <div className="char-name-container">
        <h6>{character.name}</h6>
      </div>
      <div className="char-img-container">
        <img src={character.image} alt={character.name} />
        {/* <div className="char-status-container">
          <h5>{character.status}</h5>
        </div> */}
        <ul>
          <li>Status: {character.status} </li>
          <li>Gender: {character.gender}</li>
          <li>Species: {character.species}</li>
        </ul>
      </div>
      {/* <div className="char-gender-container">
        <h6>{character.gender}</h6>
      </div> */}
    </div>
  );
};

export default SingleChar;
