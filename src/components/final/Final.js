import React, { Component } from "react";
import Header from "./Header";
import Main from "./Main";
import Sidebar from "./Sidebar";
import "./final.css";

export default class Final extends Component {
    render() {
        return (
            <div className="final">
                <Header image={this.props.state.details.image} name={this.props.state.details.name} title={this.props.state.details.title}/>
                <div className="lower-section">
                    <Main profile={this.props.state.details.profile} experiences={this.props.state.experiences} educations={this.props.state.educations}/>
                    <Sidebar address={this.props.state.details.address} phone={this.props.state.details.phone} email={this.props.state.details.email} skills={this.props.state.details.skills}/>
                </div>
            </div>
        )
    }
}
