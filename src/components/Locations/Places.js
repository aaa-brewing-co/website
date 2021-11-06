/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react"

import untappd from "../../assets/untappd.png"
// import DropdownFilter from "../commons/DropdownFilter";

import HopIcon from "../../assets/icons/hop.png";
import BeerIcon from "../../assets/icons/beer.png";
import BreweryIcon from "../../assets/icons/brewery.png";

// const filterOptions = [ "Price", "Untappd" ]

export default function Places({ locations }) {
  const [filterText, setFilterText] = useState('')

  return (
    <>
      <RegionTabs />
      <div className="is-flex-tablet mx-4 is-centered">
        <SearchBar
          filterText={filterText}
          onFilterTextChange={setFilterText} />
          <div className="type-selection">
            <label class="checkbox">
              <img src={HopIcon} alt="Hop Icon" />
              <input type="checkbox" id="craft"
                // checked={this.state.checked}
                // onChange={this.onChange}
              />
            </label>

            <label class="checkbox">
              <img src={BeerIcon} alt="Beer Icon" />
              <input type="checkbox" id="beer"
                // checked={this.state.checked}
                // onChange={this.onChange}
              />
            </label>

            <label class="checkbox">
              <img src={BreweryIcon} alt="Brewery Icon" />
              <input type="checkbox" id="brewery"
                // checked={this.state.checked}
                // onChange={this.onChange}
              />
            </label>
          </div>
        {/* <DropdownFilter data={filterOptions} useDefault={true} /> */}
      </div>

      <div className="places">
        {/* TODO - LIMIT TO 6 + SHOW MORE */}
        <Locations
          locations={locations}
          filterText={filterText} />
      </div>

    </>
  )
}

function SearchBar({ filterText, onFilterTextChange }) {
  return (
    <input
      className="input"
      type="text"
      value={filterText} placeholder="Search..."
      onChange={(e) => onFilterTextChange(e.target.value)} />
  )
}

function RegionTabs() {
  const regions = ["NORTH", "CENTRAL", "SOUTH", "EAST", "WEST"];
  return (
    <div className="tabs is-toggle">
      <ul>
        <li className="is-active">
          <a href="#">
            <span>ALL</span>
          </a>
        </li>
        {regions.map( (region, i) => (
        <li key={i}>
          <a href="#">
            <span>{region}</span>
          </a>
        </li>
        ))}
      </ul>
    </div>
  )
}

function Locations({ locations, filterText }) {
  const rows = []

  locations.forEach((location) => {
    if (location.data.name.toLocaleLowerCase().indexOf(filterText.toLocaleLowerCase()) === -1) {
      return
    }
    const directionsLink = "https://www.google.com/maps/dir//"+location.data.name
    rows.push(
      <div className="place" key={location.ref.id}>
        <h2>{location.data.name}</h2>
        <div className="meta">
          <div className="price">
            {location.data.price ? <Price price={location.data.price} /> : ''}
          </div>
          {location.data.untappd ? <UntappdButton href={location.data.untappd} /> : ''}
        </div>
        <div className="details">
          <p>Tumeric kogi truffaut, ugh migas gluten-free flannel. Glossier enamel pin synth, tbh tattooed you probably haven't heard of them tumeric williamsburg.</p>
          <br/>
          <p>{location.data.address}</p>
          <p className="links">
            {location.data.website ? <a href={location.data.website} target="_blank" rel="noreferrer noopener">Website</a> : ''}
            {location.data.googleMap ? <a href={location.data.googleMap} target="_blank" rel="noreferrer noopener">Google Maps</a> : ''}
            <a href={directionsLink} target="_blank" rel="noreferrer noopener">Directions</a>
          </p>
        </div>
      </div>
    )
  })

  return (
    !rows.length ? <h1 className="mx-auto my-6">No spots found.</h1> : rows
  )
}

function Price({price}) {
  let value = price
  let dollars = ""
  for (var i = 0; i < value; i++) {
    dollars += "$"
  }
  return (
    dollars
  )
}

function UntappdButton({href}) {
  return (
    <div className="untappd">
      <a href={href} target="_blank" rel="noreferrer noopener">
        <img src={untappd} className="untappd-logo" alt="Untappd Logo" loading="lazy" />
      </a>
    </div>
  )
}
