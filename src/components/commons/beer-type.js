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

const data = [
  {
    title: 'Lager',
    paragraph: "<p>Lagers are a typical entry point into beer for new drinkers.</p><p>Made with bottom fermenting yeast that has a lower tolerance to alcohol, lagers can taste light and a little malty. Classic lagers in America include Miller High Life, Coors, Budweiser and Yuengling.</p>"
  },
  {
    title: 'IPA',
    paragraph: " <p>IPAs which encompass numerous styles of beer, get their characteristics largely from hops and herbal, citrus or fruity flavors. They can be bitter and contain high alcohol levels, though the final product depends on the variety of hops used. Some IPAs can taste like pure citrus, while others are strong and bitter. Prominent IPA styles include West Coast IPA, British IPA and New England Style IPA.</p><p>According to Bon Appétit, New England IPAs carry a fruity flavor with low bitterness, while the British style is maltier and bitter. West Coast IPAs appear to stand somewhere in the middle, with a balance between the fruitiness and bitterness. The best way to figure out your preference would be to figure out which IPA style goes best with your tastebuds.</p><p>According to Koch, IPAs are usually a beer drinker’s first introduction to the world of craft beer. He suggests trying out a variety of IPA types before eventually settling on a couple of favorites.</p>"
  },
  {
    title: 'Pale ales',
    paragraph: " <p>Pale ales are usually hoppy but carry a lower alcohol content than IPAs. Most types of pale ale, which can include American amber ale, American pale ale, blonde ale and English pale ale, are malty, medium-bodied and easy to drink.</p>"
  },
  {
    title: 'Pilsners',
    paragraph: "<p>Pilsners, which originate from the Czech Republic, fall under the lager category. German pilsners give off a pale gold color and crisp flavor, while Czech pilsners are a little darker with higher bitterness.</p>"
  },
  {
    title: 'Stout beer',
    paragraph
  },
  {
    title: 'Porter',
    paragraph
  },
  {
    title: 'Belgian beer',
    paragraph
  },
  {
    title: 'Wheat beer',
    paragraph
  },
  {
    title: 'Sour beer',
    paragraph
  }
]

export default BeerType;