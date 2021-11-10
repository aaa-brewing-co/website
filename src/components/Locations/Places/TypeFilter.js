/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react"

import HopIcon from "../../../assets/icons/hop.png";
import BeerIcon from "../../../assets/icons/beer.png";
import BreweryIcon from "../../../assets/icons/brewery.png";

const types = [
  { type: "craft", icon: HopIcon },
  { type: "beer", icon: BeerIcon },
  { type: "brewery", icon: BreweryIcon }
]

export default function TypeFilter({filterTypes, onFilterTypesChange}) {
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
    <div className="tabs is-toggle">
      <ul className="type-selection is-justify-content-center">
        {types.map( (type, i) => (
        <li key={i}>
          <a>
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
  )
}