import React from "react";
import { useState } from "react";
import { beers } from "./beers";

function BeerType() {

  const [selected, setSelected] = useState(null)
  const toggle = i => {
    if(selected === i) {
      return setSelected(null)
    }
    setSelected(i)
  }

  return (
    <div className="wrapper my-5">
        <div className="accordion">
            {beers.map((beer, i) => (
                <div className="item" key={i}>
                    <div className="title" onClick={() => toggle(i)}>
                        <h2>{beer.title}</h2>
                        <span>{selected === i ? '-' : '+'}</span>
                    </div>
                    <div
                      className={selected === i ? 'paragraph show' : 'paragraph'}
                      dangerouslySetInnerHTML={{__html: beer.description}}>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
};

export default BeerType;