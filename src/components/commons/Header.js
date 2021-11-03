import React, { Component } from "react";
// import logo from '../../assets/logo.png';

export default class Header extends Component {
  state = {
    title: this.props.title,
    subtitle: this.props.subtitle
  };

  render() {
    return (
      <header className="App-header">
        <div className="wrap">
          <h1 className="heading">{this.state.title}</h1>
          <p className="subheading">{this.state.subtitle}</p>
          🍻
        </div>

        {/* <img src={logo} className="App-logo" alt="logo" width="200" height="200" loading="lazy" />
        <p>
          SAVE WATER
          <br/>
          DRINK BEER
          <br />
          🍻
        </p> */}
      </header>
    )
  }
};