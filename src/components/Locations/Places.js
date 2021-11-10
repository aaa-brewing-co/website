/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react"

import untappd from "../../assets/untappd.png"
// import DropdownFilter from "../commons/DropdownFilter";

import HopIcon from "../../assets/icons/hop.png";
import BeerIcon from "../../assets/icons/beer.png";
import BreweryIcon from "../../assets/icons/brewery.png";

// const filterOptions = [ "Price", "Untappd" ]
const defaultTypes = ['craft', 'beer', 'brewery']
const types = [
  { type: "craft", icon: HopIcon },
  { type: "beer", icon: BeerIcon },
  { type: "brewery", icon: BreweryIcon }
]

export default function Places({ locations }) {
  const [filterText, setFilterText] = useState('')

  const [filterTypes, setFilterTypes] = useState(defaultTypes)

  return (
    <>
      <RegionTabs />
      <div className="is-flex-tablet mx-4 is-centered">
        <SearchBar
          filterText={filterText}
          onFilterTextChange={setFilterText} />
        <TypeFilter types={types}
          filterTypes={filterTypes}
          onFilterTypesChange={setFilterTypes} />
        {/* <DropdownFilter data={filterOptions} useDefault={true} /> */}
      </div>

      <div className="places">
        {/* TODO - LIMIT TO 6 + SHOW MORE */}
        <Locations
          locations={locations}
          filterText={filterText}
          filterTypes={filterTypes} />
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

function Locations({ locations, filterText, filterTypes }) {
  const rows = []

  locations.forEach((location) => {
    if (location.data.name.toLocaleLowerCase().indexOf(filterText.toLocaleLowerCase()) === -1) {
      return
    }
    const type = location.data.type
    if (!filterTypes.some(i => type.includes(i))) {
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

function TypeFilter({types, filterTypes, onFilterTypesChange}) {
  const [checked, setChecked] = useState(
    new Array(types.length).fill(true)
  )

  const handleCheck = (position) => {
    let newFilterTypes = [...filterTypes]

    const updatedCheckedState = checked.map((item, index) => {
      let type = types[index].type

      if (index === position) {
        if (item) {
          newFilterTypes.splice(newFilterTypes.indexOf(type), 1);
        } else {
          newFilterTypes.push(type)
        }
        return !item
      } else {
        return item
      }
    });

    setChecked(updatedCheckedState);
    return newFilterTypes;
  };

  return (
    <>
      <div className="tabs is-toggle">
        <ul className="type-selection is-justify-content-center">
          {types.map( (type, i) => (
          <li key={i}>
            <a href="#">
              <span>
                <label className="checkbox">
                  <img src={type.icon} alt="Hop Icon"
                    className={`${type.type} ${checked[i] ? '' : 'unchecked'}`} />
                  <input type="checkbox"
                    checked={checked[i]}
                    onChange={() => onFilterTypesChange(handleCheck(i)) } />
                </label>
              </span>
            </a>
          </li>
          ))}
        </ul>
      </div>
    </>
  )
}