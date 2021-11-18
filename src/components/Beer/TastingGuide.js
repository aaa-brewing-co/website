import React from "react";

import Tabs from "../commons/Tabs";
import HopImage from "../../assets/types-of-hops-infographic.png"
import SRMImage from "../../assets/srm.png"

export default function TastingGuide() {
  return (
    <div className="tasting-guide">
      {/* https://www.craftbeer.com/educational-resources/flavor-components-in-beer */}
      {/* https://thompsonislandbrewing.com/blog/what-to-look-for-when-tasting-beernbsp */}

      <Tabs>
        <div label="Aesthetics">
          <p>Color, clarity and foam all play a role in a beer's appearance. The appearance can vary, though, depending on the lighting and background you are viewing the beer against. For the most accurate view, use either a white background or natural light.</p>

          <h2 className="heading">Standard Reference Method (SRM) Colours</h2>
          <img src={SRMImage} alt="Standard Reference Method Colours" loading="lazy" />

          <h2 className="heading"h1>Carbonation</h2>

        </div>
        <div label="Aromatics">
          <p>The aroma is one of the first qualities that beer is judged on. Keep in mind that aspects ranging from the temperature to the amount of time that passed since you opened the bottle can affect the aroma and bouquet.</p>
          <p>Overall, aroma is based on hops, esters, malt and aromatics. Descriptions ranging from piney to citrusy often describe a beer's aroma. </p>
          <img src={HopImage} alt="Flavour and aroma profiles of popular hops" loading="lazy" />
        </div>
        <div label="Mouthfeel">
          <p>Feel, or more commonly referred to as mouthfeel, describes the body, carbonation and palate sensations of the beer. Essentially, it means how the beer feels in your mouth. Is it smooth or dry? Does it have a crisp finish or leave you with a bitter taste in your mouth? Factors such as fermentation can affect a beer's feel. </p>
        </div>
        <div label="Flavour Components">
        {/* https://www.morebeer.com/articles/focus_on_beer_flavor */}
        <p>While the flavor may be similar to the aroma, it focuses on the beer's finish and aftertaste as well as characteristics such as balance and bitterness.</p>
        <p>Taste is probably the most obvious quality that comes to mind when you think of evaluating beer. There are six types of flavors that you can differentiate when you taste beers:</p>
        <p>Sweet, Sour, Salty, Bitter, Umami, Fatty</p>

          {/* <ul>
            <li>Taste</li>
            <li>Mid-taste</li>
            <li>After-taste</li>
          </ul> */}
        </div>
      </Tabs>
    </div>
  );
};