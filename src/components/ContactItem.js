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
        <h4>{this.props.contact.name}</h4>
        <p>{this.props.contact.companyName}</p>
        <hr></hr>
      </div>
    );
  }
}
