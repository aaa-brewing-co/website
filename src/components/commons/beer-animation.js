import React from "react";
import './beer-animation.scss';

function BeerAnimation() {
  return (
<div className="beer-animation">
    <div className="container">
        <div className="mug">
            <div className="beer"></div>
        </div>
        <div className="bubble"></div>
        <div className="small-bubbles"></div>
        <div className="drip"></div>
    </div>
</div>
  );
};

export default BeerAnimation;