import React, { Component } from "react";

export default class DropdownFilter extends Component {
  state = {
    data: this.props.data,
    useDefault: this.props.useDefault
  };

  render() {
    return (
      <div className="select">
        <select className="dropdown">
          {this.state.useDefault ? <option value="" defaultValue>Filter</option> : "" }
          {this.state.data.map((option, i) => (
            <option value={option.toLocaleLowerCase()} key={i}>{option}</option>
        ))}
        </select>
      </div>
    )
  }
}