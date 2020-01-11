import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";
import ContactList from "./components/ContactList";
import ContactDetails from "./components/ContactDetails";

class App extends Component {
  constructor() {
    super();

    this.state = {
      contacts: [],
      displayContact: true,
      activeContact: ""
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

  changeDisplay = contact => {
    this.setState(prevState => ({
      displayContact: !prevState.displayContact,
      activeContact: contact
    }));
  };

  render() {
    return (
      <div>
        {this.state.displayContact ? (
          <ContactList
            contacts={this.state.contacts}
            displayContact={this.state.displayContact}
            changeDisplay={() => this.changeDisplay()}
            activeContact={this.state.activeContact}
          />
        ) : (
          <ContactDetails
            contacts={this.state.contacts}
            activeContact={this.state.activeContact}
          />
        )}
      </div>
    );
  }
}

export default withRouter(App);
