import { useState } from "react"

import Locations from "./Locations";
import SearchBar from "./SearchBar";
import TypeFilter from "./TypeFilter";
import RegionTabs from "./RegionTabs";

export default function Places({ locations }) {
  const [filterText, setFilterText] = useState('')

  const [filterTypes, setFilterTypes] = useState(['craft', 'beer', 'brewery'])

  return (
    <>
      <RegionTabs />
      <div className="is-flex-tablet mx-4 is-centered">
        <SearchBar
          filterText={filterText}
          onFilterTextChange={setFilterText} />
        <TypeFilter
          filterTypes={filterTypes}
          onFilterTypesChange={setFilterTypes} />
      </div>

      <Locations
        locations={locations}
        filterText={filterText}
        filterTypes={filterTypes} />

    </>
  )
}




