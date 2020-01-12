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
        <nav className="navbar contact-header">
          <span className="top-header">Contacts</span>
        </nav>

        <nav className="navbar second-header">Favorite Contacts</nav>
        <FavoriteContacts
          contacts={this.props.contacts}
          // handleContactClick={event => this.props.handleContactClick(event)}
          handleContactClick={this.props.handleContactClick}
        />

        <nav className="navbar second-header">Other Contacts</nav>
        <OtherContacts
          contacts={this.props.contacts}
          // handleContactClick={event => this.props.handleContactClick(event)}
          handleContactClick={this.props.handleContactClick}
        />
      </div>
    );
  }
}
