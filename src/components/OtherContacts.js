import React, { Component } from "react";
import ContactItem from "./ContactItem";

export default class OtherContacts extends Component {
  constructor() {
    super();
  }

  findOthers = () => {
    return this.props.contacts.map(contact => {
      if (contact.isFavorite === false) {
        return <ContactItem contact={contact} />;
      }
    });
  };

  render() {
    return <div>{this.findOthers()}</div>;
  }
}
