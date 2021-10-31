import React from "react";
import { useState } from "react";
import './beer-type.css';

function BeerType() {

  const [selected, setSelected] = useState(null)
  const toggle = i => {
    if(selected === i) {
      return setSelected(null)
    }
    setSelected(i)
  }

  return (
    <div className="wrapper">
        <div className="accordion">
            {data.map((item,i) => (
                <div className="item">
                    <div className="title" onClick={() => toggle(i)}>
                        <h2>{item.title}</h2>
                        <span>{selected === i ? '-' : '+'}</span>
                    </div>
                    <div className={selected === i ? 'paragraph show' : 'paragraph'} dangerouslySetInnerHTML={{__html: item.paragraph}}></div>
                </div>
            ))}
        </div>
    </div>
  );
};

const paragraph = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet natus sint provident vel ab reprehenderit cum soluta, suscipit facere nisi sed earum repellendus fuga debitis, nam molestiae minima voluptates possimus.'

const data = [

  {
    title: 'India Pale Ale (IPA)',
    paragraph: 'IPAs are usually a beer drinker’s first introduction to the world of craft beer. Encompassing of numerous styles of beer, IPAs get their characteristics largely from hops and herbal, citrus or fruity flavors.'
  },
  {
    title: 'Stout',
    paragraph: 'Stouts are a “sweet, full-bodied, slightly roasty ale that can suggest coffee-and-cream, or sweetened espresso.” Ireland’s Guinness brand produces some of the world’s most recognizable stout beer.'
  },
  {
    title: 'Pale Ale',
    paragraph: 'Pale ales are usually hoppy but carry a lower alcohol content than IPAs. They have a more balanced malt character, characterized like a biscuit-like flavor. Most types of pale ales are easy to drink.'
  },
  {
    title: 'Sours',
    paragraph: 'Highly tart, sour beers can take on many forms. With the addition of fruits like cherry, raspberry or peach, sour beers marry sweet and sour to make beer flavors completely unlike the lagers and IPAs of yore.'
  },
  {
    title: 'Porter',
    paragraph: 'Dark in color like stouts due to common ingredients like chocolate or other dark-roasted malts. Porters tend to taste less like coffee than stouts, with more of a chocolatey feel.'
  },
  {
    title: 'Pilsner',
    paragraph: 'Pilsners, which originate from the Czech Republic, fall under the lager category. German pilsners give off a pale gold color and crisp flavor, while Czech pilsners are a little darker with higher bitterness.'
  },
  {
    title: 'Belgian Beer',
    paragraph: 'Belgian-style beers as carrying fruity, spicy and sweet flavors with a high alcohol content and low bitterness. Popular Belgian beers also include Trappist ales, like Belgian Dubbel.'
  },
  {
    title: 'Wheat Beer',
    paragraph: 'Wheat beers, like hefeweizen, witbier, dunkelweizen and American wheat, are brewed with a generous amount of the grain, which adds body and flavor. It is light in color and alcohol level.'
  }
  // {
  //   title: 'Lager',
  //   paragraph: "<p>Lagers are a typical entry point into beer for new drinkers.</p><p>Made with bottom fermenting yeast that has a lower tolerance to alcohol, lagers can taste light and a little malty. Classic lagers in America include Miller High Life, Coors, Budweiser and Yuengling.</p>"
  // },
  // {
  //   title: 'IPA',
  //   paragraph: " <p>IPAs which encompass numerous styles of beer, get their characteristics largely from hops and herbal, citrus or fruity flavors. They can be bitter and contain high alcohol levels, though the final product depends on the variety of hops used. Some IPAs can taste like pure citrus, while others are strong and bitter. Prominent IPA styles include West Coast IPA, British IPA and New England Style IPA.</p><p>According to Bon Appétit, New England IPAs carry a fruity flavor with low bitterness, while the British style is maltier and bitter. West Coast IPAs appear to stand somewhere in the middle, with a balance between the fruitiness and bitterness. The best way to figure out your preference would be to figure out which IPA style goes best with your tastebuds.</p><p>According to Koch, IPAs are usually a beer drinker’s first introduction to the world of craft beer. He suggests trying out a variety of IPA types before eventually settling on a couple of favorites.</p>"
  // },
  // {
  //   title: 'Pale ales',
  //   paragraph: " <p>Pale ales are usually hoppy but carry a lower alcohol content than IPAs. Most types of pale ale, which can include American amber ale, American pale ale, blonde ale and English pale ale, are malty, medium-bodied and easy to drink.</p>"
  // },
  // {
  //   title: 'Pilsners',
  //   paragraph: "<p>Pilsners, which originate from the Czech Republic, fall under the lager category. German pilsners give off a pale gold color and crisp flavor, while Czech pilsners are a little darker with higher bitterness.</p>"
  // },
  // {
  //   title: 'Stout beer',
  //   paragraph
  // },
  // {
  //   title: 'Porter',
  //   paragraph
  // },
  // {
  //   title: 'Belgian beer',
  //   paragraph
  // },
  // {
  //   title: 'Wheat beer',
  //   paragraph
  // },
  // {
  //   title: 'Sour beer',
  //   paragraph
  // }
]

export default BeerType;