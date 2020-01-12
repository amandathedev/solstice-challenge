import React, { Component } from "react";
import ContactItem from "./ContactItem";
import ContactDetails from "./ContactDetails";

export default class FavoriteContacts extends Component {
  constructor(props) {
    super(props);
  }

  findFavorites = () => {
    // console.log(this.props);
    return this.props.contacts.map(contact => {
      if (contact.isFavorite === true) {
        console.log(contact.id);
        return (
          <div>
            <ContactItem
              contact={contact}
              key={contact.id}
              handleContactClick={this.props.handleContactClick}
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
