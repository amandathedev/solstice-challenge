import React, { Component } from "react";
import "../styles/ContactItem.css";

export default class ContactItem extends Component {
  constructor(props) {
    super(props);
  }

  addDefault = event => {
    event.target.src = "https://i.imgur.com/rnWD7QP.png";
  };

  render() {
    return (
      <div
        className="item-div"
        onClick={() => this.props.handleContactClick(this.props.contact)}
      >
        <img
          className="item-image"
          src={this.props.contact.smallImageURL}
          onError={this.addDefault}
          alt="contact image"
        ></img>
        <div className="text-div">
          <h4 className="item-header">
            {this.props.contact.isFavorite === true ? (
              <span className="emoji-span">&#11088;</span>
            ) : (
              <span className="other-span"></span>
            )}
            {this.props.contact.name}
          </h4>
          <p className="item-text">{this.props.contact.companyName}</p>
        </div>
        <hr></hr>
      </div>
    );
  }
}
