import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";
import ContactList from "./components/ContactList";

class App extends Component {
  constructor() {
    super();

    this.state = {
      contacts: []
    };
  }

  componentDidMount() {
    this.fetchContacts();
  }

  fetchContacts = () => {
    fetch("https://s3.amazonaws.com/technical-challenge/v3/contacts.json")
      .then(resp => resp.json())
      .then(contacts => {
        this.setState({
          contacts
        });
      })
      .catch(alert);
  };

  render() {
    return (
      <div>
        <ContactList contacts={this.state.contacts} />
      </div>
    );
  }
}

export default withRouter(App);
