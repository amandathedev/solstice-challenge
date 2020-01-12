import React, { Component } from "react";
import ContactItem from "./ContactItem";
import ContactDetails from "./ContactDetails";

export default class FavoriteContacts extends Component {
  constructor(props) {
    super(props);
  }

  findFavorites = () => {
    return this.props.contacts.map(contact => {
      if (contact.isFavorite === true) {
        // console.log(contact.id);
        return (
          <div>
            <ContactItem
              contact={contact}
              key={contact.id}
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
    return <div>{this.findFavorites()}</div>;
  }
}
