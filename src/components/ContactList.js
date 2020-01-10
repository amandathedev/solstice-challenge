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

export default class ContactList extends Component {
  render() {
    return (
      <div className="contact-list">
        <nav className="navbar navbar-light bg-light">
          <span className="navbar-brand mb-0 h1">Contacts</span>
        </nav>

        <FavoriteContacts contacts={this.props.contacts} />
        <OtherContacts />
      </div>
    );
  }
}
