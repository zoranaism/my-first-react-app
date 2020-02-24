// src/components/Pokemon.js
import React from "react";
import './Pokemon.scss';

export default function Pokemon(props) {
  return (
    <div className="card shadow-sm mb-4 Pokemon">
      <div className="card-body pb-0 ">
        <h5 className="card-title">Pokemon name: {props.name}</h5>
        <h6 className="card-subtitle mb-3 text-primary">Weight: {props.weight} kg</h6>
        <p class="my-5">Awesome: {props.awesome ? "YES!" : "nope, not really"}<br />
        Terrifying: {props.terrifying ? "Very" : "nah, lovable"}</p>

        <ul className="list-group list-group-flush">
          {props.abilities.map(ability => {
            return <li className="list-group-item">{ability}</li>;
          })}
        </ul>

      </div>
    </div>
  );
}