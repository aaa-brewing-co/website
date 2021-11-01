import React, { useEffect, useState } from "react"

import untappd from "../../assets/untappd.png"

import { getAllLocations } from "../../api"

export default function Places() {
  const [locations, setLocations] = useState([])
  const [filterText, setFilterText] = useState('')

  useEffect(() => {
    getAllLocations.then(res => {
      setLocations(res);
      // console.log(res);
    })
  }, [])

  return (
    <>
      <div className="is-flex mx-4 is-centered">
        <SearchBar
          filterText={filterText}
          onFilterTextChange={setFilterText} />
        <FilterDropdown
          filterOptions={filterOptions} />
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

const filterOptions = [ "Price", "Untappd" ]

function FilterDropdown({ filterOptions }) {
  const options = []

  filterOptions.forEach((option, i) => {
    options.push(
      <option key={i} value={option.toLocaleLowerCase()}>{option}</option>
    )
  })

  return (
    <select className="dropdown">
      <option value="" defaultValue>Filter</option>
      { options }
    </select>
  )
}

function Locations({ locations, filterText }) {
  const rows = []

  locations.forEach((location) => {
    if (location.data.name.toLocaleLowerCase().indexOf(filterText.toLocaleLowerCase()) === -1) {
      return
    }
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
            {location.data.website ? <a href={location.data.website}>Website</a> : ''}
            {location.data.googleMap ? <a href={location.data.googleMap}>Google Maps</a> : ''}
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
      <a href={href}>
        <img src={untappd} className="untappd-logo" alt="Untappd Logo" loading="lazy" />
      </a>
    </div>
  )
}
