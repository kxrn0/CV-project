import React, { Component } from 'react'
import { create_id } from '../../utilities/create_id'

export default class Sidebar extends Component {
  render() {
    return (
      <aside className="aside">
        <h2>Details</h2>
        <ul>
          <li key="address-key">
            <p>{this.props.address}</p>
          </li>
          <li key="phone-key">
            <p>{this.props.phone}</p>
          </li>
          <li key="email-key">
            <p>{this.props.email}</p>
          </li>          
        </ul>
        <span className="horizontal-rule"></span>
        <h2>Skills</h2>
        <ul className="skills-ul">
          {this.props.skills.map(skill => <li key={create_id(100)}>{skill}</li>)}
        </ul>
      </aside>
    );
  }
}
