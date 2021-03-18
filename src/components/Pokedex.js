import React, { Fragment } from "react";
import Pokemon from "./Pokemon";

const Pokedex = (props) => {
  // const [pokemones] = props;
  const pokemones = props.pokemones;
  return (
    <Fragment>
      <div className="container content-pagination">
        <h2 className="content-pagination-title">Pokedex</h2>
        <div className="content-pagination-controller">
          <button className="btn-controller ">
            <i className="fas fa-arrow-left back-pagination"></i>
          </button>
          <p className="pagination">1 de 154</p>
          <button className="btn-controller ">
            <i className="fas fa-arrow-right next-pagination"></i>
          </button>
        </div>
      </div>
      <div className="container pokedex-grid">
        {pokemones.map((pokemon, idx) => {
          return <Pokemon pokemon={pokemon} key={pokemon.name}></Pokemon>;
        })}
      </div>
    </Fragment>
  );
};

export default Pokedex;
