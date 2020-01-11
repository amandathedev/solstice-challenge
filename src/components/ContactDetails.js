import React, { Component } from "react";
import "../styles/ContactDetails.css";

export default class ContactDetails extends Component {
  constructor(props) {
    super(props);
  }

  // Correct phone number formatting
  formatPhone = number => {
    let fixed = ("" + number).replace(/\D/g, "");
    let match = fixed.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return "(" + match[1] + ") " + match[2] + "-" + match[3];
    }
    return null;
  };

  render() {
    // Destructure
    const {
      largeImageURL,
      name,
      companyName,
      phone,
      address
    } = this.props.activeContact;
    return (
      <div className="details-div">
        <nav className="navbar contact-header">
          <span className="first-header">Contacts</span>
        </nav>
        <div className="content-div">
          <img className="details-img" src={largeImageURL}></img>
          <h3 className="details-name">{name}</h3>
          <p className="details-company">{companyName}</p>
          <hr></hr>
          <p className="details-header">Phone:</p>
          <div className="home-phone-div">
            <p>{this.formatPhone(phone.home)}</p>
            <p className="details-spec">Home</p>
          </div>
          <hr></hr>
          <p className="details-header">Phone:</p>
          <p>{this.formatPhone(phone.mobile)}</p>
          <p className="details-spec">Mobile</p>
          <hr></hr>
          <p className="details-header">Phone:</p>
          <p>{this.formatPhone(phone.work)}</p>
          <p className="details-spec">Work</p>
          <hr></hr>
          <p className="details-header">Address:</p>
          <p>{address.street}</p>
          <p>
            {address.city}, {address.state} {address.zipCode}, {address.country}
          </p>
        </div>
      </div>
    );
  }
}
