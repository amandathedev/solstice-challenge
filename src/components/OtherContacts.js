import React, { Component } from "react";
import ContactItem from "./ContactItem";

export default class OtherContacts extends Component {
  constructor(props) {
    super(props);
  }

  findOthers = () => {
    return this.props.contacts.map(contact => {
      if (contact.isFavorite === false) {
        return (
          <div>
            <ContactItem
              contact={contact}
              // changeDisplay={() => this.props.changeDisplay()}
              handleContactClick={this.props.handleContactClick}
              toggleFavorite={this.props.toggleFavorite}
            />
            <hr></hr>
          </div>
        );
      }
    });
  };

  render() {
    return <div>{this.findOthers()}</div>;
  }
}
