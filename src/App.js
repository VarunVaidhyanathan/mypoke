import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/navbar/Navbar.js';
import { Axios } from 'axios';
import { useState } from "react";
import axios, * as others from 'axios';
import Pokemoncard from './components/pokemon/Pokemoncard.js';


function App() {
  const [isPokemonSet, setIsPokemonSet] = useState(false);
  const [pokemon, setPokemon] = useState("");
  const [pokemonImage, setPokemonImage] = useState({
    img: "",
    type: ""
  });

  const getPokemon = ()=>{
      axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then((response)=>{
          setPokemonImage({
            img: response.data.sprites.front_default,
            type: response.data.types[0].type.name
          });
          setIsPokemonSet(true);
      })
  }
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="Maincontent">
      <div className='maincontent'>
                <div className="Searcharea">
                <input type="text" placeholder="Search your favorite pokemon" size={50} onChange={(event)=>{
                    setPokemon(event.target.value);}
                    }>
                </input>
                {/*<div className="container">
                <PokemonCard />
                </div>
                */} 
                <p>  &nbsp;&nbsp;&nbsp;&nbsp; </p>    
                <button onClick={getPokemon}>Search</button>
                </div>
      </div>
              
      </div>
      <div className="Pokemoncard">
        <Pokemoncard isPokemonSet={isPokemonSet} pokemonImage={pokemonImage}></Pokemoncard>
      </div>
    </div>
  );
}

export default App;
