import React, { Component } from "react";
import "../styles/ContactDetails.css";

export default class ContactDetails extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="details-div">
        <h1>contact details</h1>
      </div>
    );
  }
}
