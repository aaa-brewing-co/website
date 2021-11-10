import React from "react";

export default function BeerStyles(props) {
  return (
    <>
      {/* TODO - make this scrollable to the right */}
      <div className="container">
        {props.beers.map((beer, i) => (
          <div className="card" key={i}>
            <div className="content">
              <h2>{i+1}</h2>
              <h3>{beer.title}</h3>
              <p>{beer.description}</p>
            </div>
          </div>
        ))}
      </div>
      {/*
        Reference:
        - https://www.brewersassociation.org/resource-hub/beer-styles/
        - https://www.beeradvocate.com/beer/styles/
      */}
    </>
  );
}