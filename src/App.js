import React, { Component } from "react";
import Inputs from "./components/inputs/Inputs";
import Final from "./components/final/Final";
import ReactToPrint from "react-to-print";
import { create_id } from "./utilities/create_id";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.set_detail = this.set_detail.bind(this);
    this.add_skill = this.add_skill.bind(this);
    this.set_image = this.set_image.bind(this);
    this.remove_education = this.remove_education.bind(this);
    this.set_education_input = this.set_education_input.bind(this);
    this.add_education = this.add_education.bind(this);
    this.set_experience_input = this.set_experience_input.bind(this);
    this.remove_experience = this.remove_experience.bind(this);
    this.add_experience = this.add_experience.bind(this);

    this.state = {
      details: {
        image: "",
        name: "Anon Ymouse",
        title: "Software Consultant",
        address: "420, 69 street Colorado Texas",
        phone: "123 456 7890",
        email: "byme@hi.com",
        skills: [],
        profile: "Bactria, or Bactriana, was an ancient region in Central Asia. Bactria proper was north of the Hindu Kush mountain range and south of the Oxus river, covering Afghanistan. More broadly, Bactria was the area which was located north of the Hindu Kush, west of the Pamirs and south of the Tian Shan, covering modern-day Tajikistan and Uzbekistan as well, with the Amu Darya flowing west through the centre."
      },
      experiences: [
        {
          position: "Consultant",
          company: "By Me",
          city: "Nankin",
          from: 1978,
          to: 2024,
          id: "byme"
        },
        {
          position: "Consultant",
          company: "By Me",
          city: "Nankin",
          from: 1978,
          to: 2024,
          id: "hi"
        },
        {
          position: "Consultant",
          company: "By Me",
          city: "Nankin",
          from: 1978,
          to: 2024,
          id: "bye"
        }
      ],
      educations: [
        {
          institution: "----------",
          city: "---------",
          degree: "-------",
          subject: "----------",
          from: 1929,
          to: 2024,
          id: "abc"
        }
      ]
    };
  }

  add_skill(skill) {
    this.setState({ details: { ...this.state.details, skills: [...this.state.details.skills, skill] } });
  }

  set_detail(detail, value) {
    this.setState({ details: { ...this.state.details, [detail]: value } });
  }

  set_image(src) {
    this.setState({ details: { ...this.state.details, image: src } });
  }

  remove_education(id) {
    this.setState({ educations: this.state.educations.filter(edu => edu.id !== id) });
  }

  set_education_input(id, input, value) {
    const index = this.state.educations.findIndex(edu => edu.id === id);
    const educations = this.state.educations.slice(0, index).concat({...this.state.educations[index], [input]: value}).concat(this.state.educations.slice(index + 1));

    this.setState({educations});
  }

  add_education() {
    this.setState({educations: [...this.state.educations, {institution: '', city: '', degree: '', subject: '', from: '', to: '', id: create_id(100)}]});
  }

  set_experience_input(id, input, value) {
    const index = this.state.experiences.findIndex(xp => xp.id === id);
    const xp = this.state.experiences.slice(0, index).concat({...this.state.experiences[index], [input]: value}).concat(this.state.experiences.slice(index + 1));

    this.setState({experiences: xp});
  }

  add_experience() {
    this.setState({experiences: [...this.state.experiences, {position: '', company: '', city: '', from: '', to: '', id: create_id(100)}]});
  }

  remove_experience(id) {
    this.setState({experiences: this.state.experiences.filter(xp => xp.id !== id)});
  }

  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <Inputs state={this.state} add_experience={this.add_experience} set_experience_input={this.set_experience_input} remove_experience={this.remove_experience} add_education={this.add_education} set_detail={this.set_detail} add_skill={this.add_skill} set_image={this.set_image} remove_education={this.remove_education} set_education_input={this.set_education_input} />
          <ReactToPrint trigger={() => <button>Print</button> } content={() => this.componentRef}/>
        </div>
        <Final state={this.state} ref={el => (this.componentRef = el)}/>
      </div>
    )
  }
}
