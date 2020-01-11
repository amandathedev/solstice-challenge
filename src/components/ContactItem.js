import React, { Component } from "react";
import "../styles/ContactItem.css";

export default class ContactItem extends Component {
  render() {
    console.log(this.props.contact.name);
    return (
      <div className="item-div">
        <img
          className="item-image"
          src={this.props.contact.smallImageURL}
        ></img>
        <div className="text-div">
          <h4 className="item-header">
            <span className="emoji-span">&#11088;</span>
            {this.props.contact.name}
          </h4>
          <p className="item-text">{this.props.contact.companyName}</p>
        </div>
        <hr></hr>
        <hr></hr>
      </div>
    );
  }
}