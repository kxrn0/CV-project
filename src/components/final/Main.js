import React, { Component } from "react";
import { create_id } from "../../utilities/create_id";

export default class Main extends Component {
  render() {
    return (
      <main className="main">
        <div className="profile">
          <h2>Profile</h2>
          <p>{this.props.profile}</p>
        </div>
        <span className="horizontal-rule"></span>
        <h2>Education</h2>
        {this.props.educations.map((edu, index) => {
          return (
            <div key={create_id(100)}>
              <div className="info-wrapper">
                <p className="period">{edu.from}-{edu.to}</p>
                <div className="edu-details">
                  <p className="institution">Institution : {edu.institution}, {edu.city}</p>
                  <p className="degree">Degree : {edu.degree}</p>
                  <p className="subject">Subject : {edu.subject}</p>
                </div>
              </div>
              {index < this.props.educations.length - 1 ? <span className="dotted-underline"></span> : ''}
            </div>
          );
        })}
        <span className="horizontal-rule"></span>
        <h2>Experience</h2>
        {this.props.experiences.map((xp, index) => {
          return (
            <div key={create_id(100)}>
              <div className="info-wrapper">
                <p className="period">{xp.from}-{xp.to}</p>
                <div className="xp-details">
                  <p className="position">{xp.position}</p>
                  <p className="location">{xp.company}, {xp.city}</p>
                </div>
              </div>
              {index < this.props.educations.length - 1 ? <span className="dotted-underline"></span> : ''}
            </div>
          );
        })}
      </main>
    )
  }
}
