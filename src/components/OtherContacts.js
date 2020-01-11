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
          <ContactItem
            contact={contact}
            // changeDisplay={() => this.props.changeDisplay()}
          />
        );
      }
    });
  };

  render() {
    return <div>{this.findOthers()}</div>;
  }
}
