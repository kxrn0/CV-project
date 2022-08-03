import "./inputs.css"

import React, { Component } from 'react'
import Details from "./Details";
import Education from "./Education";
import Experience from "./Experience";

export default class Inputs extends Component {
    render() {
        return (
            <div className="inputs">
                <Details details={this.props.state.details} set_detail={this.props.set_detail} add_skill={this.props.add_skill} set_image={this.props.set_image}/>
                <span className="horizontal-rule"></span>
                <h2>Education</h2>
                {this.props.state.educations.map(edu => <Education education={edu} remove={this.props.remove_education} set_education_input={this.props.set_education_input} key={edu.id}/>)}
                <button className="add-info" onClick={this.props.add_education}>Add Edu</button>
                <span className="horizontal-rule"></span>
                <h2>Experience</h2>
                {this.props.state.experiences.map(xp => <Experience experience={xp} remove={this.props.remove_experience} set_experience_input={this.props.set_experience_input} key={xp.id}/>)}
                <button className="add-info" onClick={this.props.add_experience}>Add XP</button>
                <span className="horizontal-rule"></span>
            </div>
        )
    }
}
