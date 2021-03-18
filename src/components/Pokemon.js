import React, { Fragment } from "react";

const Pokemon = (props) => {
  const pokemon = props.pokemon;
  console.log(pokemon);
  return (
    <Fragment>
      <div className="card-pokedex" key={pokemon.name}>
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="card-pokedex-sprites"
        ></img>
        <h2>{pokemon.name}</h2>
        <small className="card-pokedex-id">#{pokemon.id}</small>
      </div>
    </Fragment>
  );
};

export default Pokemon;
