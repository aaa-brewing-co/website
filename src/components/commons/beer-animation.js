import React from "react";
import './beer-animation.css';

function BeerAnimation() {
  return (
<div class="beer-animation">
    <div class="container">
        <div class="mug">
            <div class="beer"></div>
        </div>
        <div class="bubble"></div>
        <div class="small-bubbles"></div>
        <div class="drip"></div>
    </div>
</div>
  );
};

export default BeerAnimation;