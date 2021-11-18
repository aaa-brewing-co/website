import React, { useState } from "react";

import './style.scss';

import Navbar from "../commons/Navbar";
import DropdownFilter from "../commons/DropdownFilter";
// import BeerTypes from "./BeerTypes";
import BeerStyles from "./BeerStyles";
import { beers } from "./beers";
import TastingGuide from "./TastingGuide";

const filterOptions = beers.map(beer => beer.title);

export default function Beer() {
  const [filteredBeers, updatefilteredBeers] = useState(beers);

  function filterSelect(filteredBeer) {
    if (filteredBeer) {
      updatefilteredBeers(beers.filter(beer => beer.title === filteredBeer));
    } else {
      updatefilteredBeers(beers)
    }
  }

  return (
    <div className="beer">
      <Navbar />
      <div className="section main">
        <h2 className="heading is-2">Most Common Beer Styles</h2>
        <DropdownFilter
          data={filterOptions}
          useDefault={true}
          onFilterSelect={filterSelect}
        />

        <BeerStyles beers={filteredBeers}/>
        {/* <BeerTypes /> */}

        <h2 className="heading is-2">Tasting Guide</h2>
        <TastingGuide />
      </div>
    </div>
  );
}
