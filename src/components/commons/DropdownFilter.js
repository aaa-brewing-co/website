import React, { Component } from "react";

export default class DropdownFilter extends Component {
  state = {
    data: this.props.data,
    useDefault: this.props.useDefault
  };

  render() {
    return (
      <div className="select">
        <select className="dropdown"
          onChange={(e) => this.props.onFilterSelect(e.target.value)}
        >
          {this.state.useDefault ? <option value="" defaultValue>All</option> : "" }
          {this.state.data.map((option, i) => (
            <option value={option} key={i}>{option}</option>
          ))}
        </select>
      </div>
    )
  }
}