import React, { Component } from "react";
import ContactItem from "./ContactItem";
import ContactDetails from "./ContactDetails";

export default class FavoriteContacts extends Component {
  constructor() {
    super();
  }

  findFavorites = props => {
    return this.props.contacts.map(contact => {
      if (contact.isFavorite === true) {
        return (
          <div>
            <ContactItem
              contact={contact}
              changeDisplay={() => this.props.changeDisplay()}
            />
          </div>
        );
      }
    });
  };

  render() {
    return <div>{this.findFavorites()}</div>;
  }
}
