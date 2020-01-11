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
  constructor() {
    super();
  }

  render() {
    return (
      <div className="contact-list" onClick={() => this.props.changeDisplay()}>
        <nav className="navbar contact-header">
          <span className="first-header">Contacts</span>
        </nav>

        <nav className="navbar second-header">Favorite Contacts</nav>
        <FavoriteContacts
          contacts={this.props.contacts}
          changeDisplay={() => this.props.changeDisplay()}
        />

        <nav className="navbar second-header">Other Contacts</nav>
        <OtherContacts
          contacts={this.props.contacts}
          changeDisplay={() => this.props.changeDisplay()}
        />
      </div>
    );
  }
}
