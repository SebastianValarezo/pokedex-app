import React, { Fragment, useState } from "react";
import { searchPokemon } from "../api";

const Searchbar = () => {
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState();

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const onClick = async (e) => {
    const data = await searchPokemon(search);
    setPokemon(data);
  };

  return (
    <Fragment>
      <div className="searchbar-container">
        <input
          placeholder="Buscar Pokemon...."
          onChange={onChange}
          className="searchbar"
        />
        <button onClick={onClick} className="btn-controller">
          <i className="fas fa-search search-btn-icon"></i>
        </button>
      </div>
    </Fragment>
  );
};

export default Searchbar;
