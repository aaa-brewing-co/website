import React from "react";

import Navbar from "../commons/Navbar";

const shops = [
  {
    name: "Temple Cellars",
    description: "",
    url: "https://www.templecellars.com/"
  },
  {
    name: "Beer Force",
    description: "",
    url: "https://beerforce.sg/"
  },
  {
    name: "Hopshop",
    description: "",
    url: "https://www.hopshop.com.sg/"
  },
  {
    name: "The Great Beer Experiment",
    description: "",
    url: "https://greatbeerexperiment.com/"
  },
  {
    name: "Elixir Code",
    description: "",
    url: "https://elixir-code.com/beers/"
  },
  {
    name: "CraftBeerSG",
    description: "",
    url: "https://craftbeersg.com/"
  },
  {
    name: "Smith Street Taps",
    description: "",
    url: "https://smithstreettaps.com/"
  },
  {
    name: "Quality Drops",
    description: "",
    url: "https://qualitydropsbeer.com/"
  },
  {
    name: "Beer Clan",
    description: "",
    url: "https://beerclansg.com/"
  },
  {
    name: "Thirsty",
    description: "",
    url: "https://www.thirsty.com.sg/"
  }
]

export default function Shops() {
  return (
    <div className="shops">
      <Navbar />
      <div className="section main">
        <h2 className="heading is-2">Online Craft Beer Shops</h2>

        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {shops.map( (shop, i) => (
            <tr key={i}>
              <td><a href={shop.url} target="_blank" rel="noreferrer noopener">{shop.name}</a></td>
              <td>{shop.description}</td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
