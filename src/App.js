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
  constructor(props) {
    super(props);

    this.state = {
      contacts: [],
      // displayContact: false,
      activeContact: {}
    };
  }

  componentDidMount() {
    this.fetchContacts();
  }

  fetchContacts = () => {
    // fetch("https://s3.amazonaws.com/technical-challenge/v3/contacts.json")

    // Sets up mock API using the given data. The provided link repeatedly hits a CORS error
    fetch("https://api.myjson.com/bins/e32o6")
      .then(resp => resp.json())
      .then(contacts => {
        this.setState({
          contacts
        });
      })
      .catch(alert);
  };

  // changeDisplay = (event, contact) => {
  //   console.log("got here", contact, event);
  //   this.setState(prevState => ({
  //     displayContact: !prevState.displayContact
  //     // activeContact: contact
  //   }));
  // };

  handleContactClick = contact => {
    let openContact = this.state.activeContact.name === contact.name;

    this.setState({
      // displayContact: openContact ? false : true,
      activeContact: openContact ? {} : contact
    });
  };

  render() {
    return (
      <div>
        {this.state.activeContact.name ? (
          <ContactDetails
            contacts={this.state.contacts}
            activeContact={this.state.activeContact}
          />
        ) : (
          <ContactList
            contacts={this.state.contacts}
            displayContact={this.state.displayContact}
            // changeDisplay={() => this.changeDisplay()}
            activeContact={this.state.activeContact}
            handleContactClick={this.handleContactClick}
          />
        )}
      </div>
    );
  }
}

export default withRouter(App);
