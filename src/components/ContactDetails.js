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

  formatBirthday = number => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    let x = number.split("-");
    let month = months[x[1] - 1];
    let day = x[2];
    return `${month} ${day}, ${x[0]}`;
  };

  // handle broken image links
  addDefault = event => {
    event.target.src = "https://i.imgur.com/rnWD7QP.png";
  };

  render() {
    // Destructure
    const {
      largeImageURL,
      name,
      companyName,
      phone,
      address,
      birthdate,
      emailAddress,
      isFavorite
    } = this.props.activeContact;

    return (
      <div className="details-div">
        <nav className="navbar detail-header">
          <span
            className="first-header"
            onClick={this.props.handleContactClick}
          >
            <i className="fas fa-chevron-left"></i> Contacts
          </span>
          <span
            onClick={() => this.props.toggleFavorite(this.props.activeContact)}
          >
            {isFavorite ? (
              <i className="fas fa-star favorite-star"></i>
            ) : (
              <i className="far fa-star other-star"></i>
            )}
          </span>
        </nav>
        <div className="content-div">
          <img
            className="details-img"
            src={largeImageURL}
            onError={this.addDefault}
          ></img>
          <h3 className="details-name">{name}</h3>
          <p className="details-company">{companyName}</p>
          <hr></hr>

          {/* If this data is present */}
          {phone.home ? (
            <div className="phone-div">
              <p className="details-header">Phone:</p>
              <div className="split-div">
                <p className="detail-info">{this.formatPhone(phone.home)}</p>
                <p className="details-spec">Home</p>
              </div>
              <hr></hr>
            </div>
          ) : null}

          {phone.mobile ? (
            <div className="phone-div">
              <p className="details-header">Phone:</p>
              <div className="split-div">
                <p className="detail-info">{this.formatPhone(phone.mobile)}</p>
                <p className="details-spec">Mobile</p>
              </div>
              <hr></hr>
            </div>
          ) : null}

          {phone.work ? (
            <div className="phone-div">
              <p className="details-header">Phone:</p>
              <div className="split-div">
                <p className="detail-info">{this.formatPhone(phone.work)}</p>
                <p className="details-spec">Work</p>
              </div>
              <hr></hr>
            </div>
          ) : null}

          {address ? (
            <div>
              <p className="details-header">Address:</p>
              <p className="detail-info">
                {address.street}
                <br></br>
                {address.city}, {address.state} {address.zipCode},{" "}
                {address.country}
              </p>
              <hr></hr>
            </div>
          ) : null}

          {birthdate ? (
            <div>
              <p className="details-header">Birthdate:</p>
              <p className="detail-info">{this.formatBirthday(birthdate)}</p>
              <hr></hr>
            </div>
          ) : null}

          {emailAddress ? (
            <div>
              <p className="details-header">Email:</p>
              <p className="detail-info">{emailAddress}</p>
              <hr></hr>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}
