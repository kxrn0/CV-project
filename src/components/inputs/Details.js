import React, { Component } from 'react'
import { create_id } from '../../utilities/create_id';
import image from "../../images/folder-image.svg";

export default class Details extends Component {
  constructor(props) {
    super(props);

    this.handle_detail_input = this.handle_detail_input.bind(this);
    this.handle_skill_change = this.handle_skill_change.bind(this);
    this.handle_skill_click = this.handle_skill_click.bind(this);
    this.handle_key_press = this.handle_key_press.bind(this);
    this.handle_image_input = this.handle_image_input.bind(this);

    this.state = {
      currentSkill: ""
    };
  }

  handle_detail_input(event) {
    this.props.set_detail(event.target.name, event.target.value);
  }

  handle_skill_change(event) {
    this.setState({currentSkill: event.target.value});
  }

  handle_skill_click() {  
    if (this.state.currentSkill.trim()) {
      this.props.add_skill(this.state.currentSkill);
      this.setState({currentSkill: ''});
    }
  }

  handle_key_press(event) {
    if (event.key === "Enter")
      this.handle_skill_click();
  }

  handle_image_input(event) {
    const file = event.target.files[0];

    if (this.validate_type(file))
      this.props.set_image(URL.createObjectURL(file));
  }

  validate_type(file) {
    switch(file.type) {
      case "image/jpg":
        return true;
      case "image/jpeg":
        return true;
      case "image/png":
        return true;
      default:
        return false;
    }
  }

  render() {
    return (
      <div className="details">
        <h2>Personal Details</h2>
        <ul className="details-list">
          <li key="details-item-0">
            <label className="photo-wrapper" htmlFor="photo">
              <input type="file" id="photo" name="photo" accept=".jpg, .jpeg, .png" onChange={this.handle_image_input}/>
              <img src={this.props.details.image ? this.props.details.image : image} alt="byme" />
              <p>Photo</p>
            </label>
          </li>
          <li key="details-item-1">
            <label htmlFor="name-input">Name : </label><input type="text" name="name" id="name-input" onChange={this.handle_detail_input} value={this.props.details.name}/>
          </li>
          <li key="details-item-2">
            <label htmlFor="title-details">Title : </label><input type="text" name="title" id="title-details" onChange={this.handle_detail_input} value={this.props.details.title} />
          </li>
          <li key="details-item-3">
            <label htmlFor="address-details">Address: </label><input type="text" id="address-details" name="address" onChange={this.handle_detail_input} value={this.props.details.address}/>
          </li>
          <li key="details-item-4">
            <label htmlFor="tel-details">Phone : </label><input type="text" id="tel-details" name="phone" onChange={this.handle_detail_input} value={this.props.details.phone} />
          </li>
          <li key="details-item-5">
            <label htmlFor="email-details">Email: </label><input type="email" id="email-details" name="email" onChange={this.handle_detail_input} value={this.props.details.email}/>
          </li>
          <li key="details-item-6">
            <label htmlFor="profile-details"></label><textarea name="profile" id="profile-details" cols="30" rows="10" placeholder="Tell us more about yourself..." onChange={this.handle_detail_input} value={this.props.details.profile}></textarea>
          </li>
          <li key="details-item-7">
            <h3>Skills</h3>
            <ul>
              {this.props.details.skills.map(skill => <li key={create_id(100)}>{skill}</li>)}
              <li key="skills-button-key">
                <input type="text" className="skill-input" onChange={this.handle_skill_change} value={this.state.currentSkill} tabIndex="2"/>
                <label className="add-skill" htmlFor="skill-input" onClick={() => this.props.add_skill(this.state.currentSkill)} onKeyDown={this.handle_key_press} tabIndex="3">Add Skill</label>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    )
  }
}
