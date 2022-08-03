import React, { Component } from 'react'

export default class Experience extends Component {
  constructor(props) {
    super(props);

    this.handle_input = this.handle_input.bind(this);
  }

  handle_input(event) {
    this.props.set_experience_input(this.props.experience.id, event.target.name, event.target.value);
  }

  render() {
    return (
      <div className="experience">
        <button onClick={() => this.props.remove(this.props.experience.id)}>Delete</button>
        <ul className="experience-list">
          <li key={`position-${this.props.experience.id}`}><label htmlFor={`position-${this.props.experience.id}`}>Position : </label><input onChange={this.handle_input} id={`position-${this.props.experience.id}`} name="position" type="text" value={this.props.experience.position} /></li>
          <li key={`company-${this.props.experience.id}`}><label htmlFor={`company-${this.props.experience.id}`}>Company : </label><input onChange={this.handle_input} id={`company-${this.props.experience.id}`} name="company" type="text" value={this.props.experience.company} /></li>
          <li key={`city-${this.props.experience.id}`}><label htmlFor={`city-${this.props.experience.id}`}>City : </label><input onChange={this.handle_input} id={`city-${this.props.experience.id}`} type="text" name="city" value={this.props.experience.city} /></li>
          <li key={`from-${this.props.experience.id}`}><label htmlFor={`from-${this.props.experience.id}`}>From : </label><input onChange={this.handle_input} id={`from-${this.props.experience.id}`} type="tel" name="from" value={this.props.experience.from} /></li>
          <li key={`to-${this.props.experience.id}`}><label htmlFor={`to-${this.props.experience.id}`}>To : </label><input onChange={this.handle_input} id={`to-${this.props.experience.id}`} type="tel" name="to" value={this.props.experience.to} /></li>
        </ul>
      </div>
    )
  }
}
