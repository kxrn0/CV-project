import React, { Component } from "react";
import image from "../../images/ac.png";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <img src={this.props.image || image} alt="hi" />
        <div className="info">
          <h1>{this.props.name}</h1>
          <span className="horizontal-rule"></span>
          <p>{this.props.title}</p>
        </div>
      </div>
    )
  }
}