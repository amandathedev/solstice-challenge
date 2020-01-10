import React, { Component } from "react";

export default class FavoriteContacts extends Component {
  render() {
    return this.props.contacts.map(contact => {
      return <p>{contact.name}</p>;
    });
  }
}
