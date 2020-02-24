import React from 'react';
import logo from './logo.svg';
import './App.css';
import Title from "./components/Title.js";
import Pokemon from "./components/Pokemon/Pokemon.js"

const pokemons = [
  {
    name: "Charizard", 
    weight: 90, 
    awesome: true, 
    terrifying: false, 
    abilities: ["Blaze", "Solar power", "Tough claws", "Drought"]
  },
  {
    name: "Bulbasaur", 
    weight: 6.9, 
    awesome: true, 
    terrifying: false, 
    abilities: ["Overgrow", "Chlorophyll"]
  },
  {
    name: "Mewtwo", 
    weight: 122, 
    awesome: true, 
    terrifying: true, 
    abilities: ["Pressure", "Unnerve", "Steadfast", "Insomnia"]
  },
  {
    name: "Mega beedrill", 
    weight: 65, 
    awesome: false, 
    terrifying: true, 
    abilities: ["Intimidate", "Unnerve"]
  }
]

function App() {
  return (
    <div className="App container my-5">
       <main>
        <Title content="Poke World"/>
        <div class="row ">
          {pokemons.map(pokemon => (
            <div class="col-12 col-sm-6 col-lg-3">
              <Pokemon name={pokemon.name} weight={pokemon.weight} awesome={pokemon.awesome} terrifying={pokemon.terrifying} abilities={pokemon.abilities} />
            </div>    
          ))}  

        </div>  
      </main>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
