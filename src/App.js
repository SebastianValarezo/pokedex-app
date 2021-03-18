import React, { useState, useEffect } from "react";
import "./normalize.css";
import "./styles.css";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import Pokedex from "./components/Pokedex";
import { getPokemones, getPokemonesData } from "./api";

function App() {
  const [pokemones, setPokemones] = useState([]);

  const fecthPokemones = async () => {
    try {
      const data = await getPokemones();
      console.log(data.results);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonesData(pokemon.url);
      });
      const results = await Promise.all(promises);
      setPokemones(results);
    } catch (err) {}
  };

  useEffect(() => {
    fecthPokemones();
  }, []);

  return (
    <div>
      <Navbar></Navbar>
      <div className="App">
        <Searchbar></Searchbar>
        <Pokedex pokemones={pokemones}></Pokedex>
      </div>
    </div>
  );
}

export default App;
