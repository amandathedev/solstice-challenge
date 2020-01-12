import React, { Component } from "react";
import FavoriteContacts from "./FavoriteContacts";
import OtherContacts from "./OtherContacts";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";
import "../styles/ContactList.css";

export default class ContactList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="contact-list">
        <nav className="navbar contact-header text-center">Contacts</nav>

        <nav className="navbar second-header">Favorite Contacts</nav>
        <FavoriteContacts
          contacts={this.props.contacts}
          handleContactClick={this.props.handleContactClick}
          toggleFavorite={this.props.toggleFavorite}
        />

        <nav className="navbar second-header">Other Contacts</nav>
        <OtherContacts
          contacts={this.props.contacts}
          handleContactClick={this.props.handleContactClick}
          toggleFavorite={this.props.toggleFavorite}
        />
      </div>
    );
  }
}
