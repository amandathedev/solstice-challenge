import React, { Component } from "react";
import "../styles/ContactDetails.css";

export default class ContactDetails extends Component {
  render() {
    console.log(this.props.contact.name);
    return <div className="details-div"></div>;
  }
}
