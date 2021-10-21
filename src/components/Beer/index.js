import React from "react";

import Navbar from "../commons/Navbar";
import cat from '../../assets/cat.jpg';

const data = [
  {
    title: 'What is Craft Beer?',
    descriptin: 'blah blah blah',
    image: 'https://cataas.com/cat/616de562fd416c0017325d2a?width=300',
    imageRatio: '3 / 2'
  },
  {
    title: 'Beer Styles',
    descriptin: 'blah blah blah',
    image: 'https://cataas.com/cat/5ca1d7f28967300010ec4efe?width=300',
    imageRatio: '3 / 2'
  },
  {
    title: 'Beer Tasting Guide',
    descriptin: 'blah blah blah',
    image: cat,
    imageRatio: '100 / 77'
  }
];

function About() {
  return (
    <div className="about">
      <Navbar />
      <div className="section">
        <BeerCats />
      </div>
    </div>
  );
}

function BeerCats() {
  const list = data.map(function(item, index) {
    const imageStyle = {
      aspectRatio: item.imageRatio
    };
    return (
      <div className="columns" key={index}>
        <div className="column">
          <div class="card">
            <div class="card-image">
              <figure class="image">
                <img
                  src={item.image}
                  alt={item.title}
                  style={imageStyle}
                  width="300"
                />
              </figure>
            </div>
          </div>
        </div>
        <div className="column">
          <h3 className="is-size-3 has-text-weight-semibold">{item.title}</h3>
          <p>{item.descriptin}</p>
        </div>
      </div>
    );
  });
  return list;
}

export default About;
