import React from "react";

const styles = [ // https://time.com/5218581/types-of-beer-guide/
  {
    title: 'India Pale Ale (IPA)',
    description: 'IPAs are usually a beer drinker’s first introduction to the world of craft beer. Encompassing of numerous styles of beer, IPAs get their characteristics largely from hops and herbal, citrus or fruity flavors.'
  },
  {
    title: 'Stout',
    description: 'Stouts are a “sweet, full-bodied, slightly roasty ale that can suggest coffee-and-cream, or sweetened espresso.” Ireland’s Guinness brand produces some of the world’s most recognizable stout beer.'
  },
  {
    title: 'Pale Ale',
    description: 'Pale ales are usually hoppy but carry a lower alcohol content than IPAs. They have a more balanced malt character, characterized like a biscuit-like flavor. Most types of pale ales are easy to drink.'
  },
  {
    title: 'Sours',
    description: 'Highly tart, sour beers can take on many forms. With the addition of fruits like cherry, raspberry or peach, sour beers marry sweet and sour to make beer flavors completely unlike the lagers and IPAs of yore.'
  },
  {
    title: 'Porter',
    description: 'Dark in color like stouts due to common ingredients like chocolate or other dark-roasted malts. Porters tend to taste less like coffee than stouts, with more of a chocolatey feel.'
  },
  {
    title: 'Pilsner',
    description: 'Pilsners, which originate from the Czech Republic, fall under the lager category. German pilsners give off a pale gold color and crisp flavor, while Czech pilsners are a little darker with higher bitterness.'
  },
  {
    title: 'Belgian Beer',
    description: 'Belgian-style beers as carrying fruity, spicy and sweet flavors with a high alcohol content and low bitterness. Popular Belgian beers also include Trappist ales, like Belgian Dubbel.'
  },
  {
    title: 'Wheat Beer',
    description: 'Wheat beers, like hefeweizen, witbier, dunkelweizen and American wheat, are brewed with a generous amount of the grain, which adds body and flavor. It is light in color and alcohol level.'
  },
];

export default function BeerStyles() {
  return (
    <>
      {/* TODO - make this scrollable to the right */}
      <div className="container">
        {styles.map( (item, i) => (
          <div className="card" key={i}>
            <div className="content">
              <h2>{i+1}</h2>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
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