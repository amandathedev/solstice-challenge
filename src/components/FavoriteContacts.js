import React, { Component } from "react";
import ContactItem from "./ContactItem";

export default class FavoriteContacts extends Component {
  constructor() {
    super();
  }

  findFavorites = () => {
    return this.props.contacts.map(contact => {
      if (contact.isFavorite === true) {
        // console.log(contact);
        return <ContactItem contact={contact} />;
      }
    });
  };

  render() {
    return <div>{this.findFavorites()}</div>;
  }
}
