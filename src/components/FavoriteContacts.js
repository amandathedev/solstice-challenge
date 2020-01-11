import React, { Component } from "react";
import ContactItem from "./ContactItem";
import ContactDetails from "./ContactDetails";

export default class FavoriteContacts extends Component {
  constructor() {
    super();
  }

  viewDetails = () => {};

  findFavorites = () => {
    return this.props.contacts.map(contact => {
      if (contact.isFavorite === true) {
        return <ContactItem contact={contact} onClick={this.viewDetails()} />;
      }
    });
  };

  render() {
    return <div>{this.findFavorites()}</div>;
  }
}
