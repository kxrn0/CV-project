import React, { Component } from 'react'

export default class Education extends Component {
  constructor(props) {
    super(props);

    this.state = {
      institution: this.props.education.institution
    };

    this.handle_input = this.handle_input.bind(this);
  }

  handle_input(event) {
    this.props.set_education_input(this.props.education.id, event.target.name, event.target.value);
  }

  render() {
    return (
      <div className='education'>
        <button onClick={() => this.props.remove(this.props.education.id)}>Delete</button>
        <ul>
          <li key={`institution-${this.props.education.id}`}><label htmlFor={`institution-${this.props.education.id}`}>Institution : </label><input name="institution" onChange={this.handle_input} id={`institution-${this.props.education.id}`} type="text" value={this.props.education.institution} /></li>
          <li key={`city-${this.props.education.id}`}><label htmlFor={`city-${this.props.education.id}`}>City : </label><input type="text" id={`city-${this.props.education.id}`} name="city" value={this.props.education.city} onChange={this.handle_input} /></li>
          <li key={`degree-${this.props.education.id}`}><label htmlFor={`degree-${this.props.education.id}`}>Degree : </label><input id={`degree-${this.props.education.id}`} name="degree" type="text" value={this.props.education.degree} onChange={this.handle_input} /></li>
          <li key={`subject-${this.props.education.id}`}><label htmlFor={`subject-${this.props.education.id}`}>Subject : </label><input id={`subject-${this.props.education.id}`} name="subject" type="text" value={this.props.education.subject} onChange={this.handle_input} /></li>
          <li key={`from-${this.props.education.id}`}><label htmlFor={`from-${this.props.education.id}`}>From : </label><input id={`from-${this.props.education.id}`} type="tel" name="from" value={this.props.education.from} onChange={this.handle_input} /></li>
          <li key={`to-${this.props.education.id}`}><label htmlFor={`to-${this.props.education.id}`}>To : </label><input id={`to-${this.props.education.id}`} type="tel" name="to" value={this.props.education.to} onChange={this.handle_input} /></li>
        </ul>
      </div>
    )
  }
}
