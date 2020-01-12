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
    this.sortContacts();
  }

  fetchContacts = () => {
    // fetch("https://s3.amazonaws.com/technical-challenge/v3/contacts.json")

    // !! Sets up mock API using the given data. The provided link repeatedly hits a CORS error
    fetch("https://api.myjson.com/bins/e32o6")
      .then(resp => resp.json())
      .then(contacts => {
        this.setState({
          contacts
        });
      })
      .catch(alert);
  };

  sortContacts = () => {
    let sortedContacts = this.state.contacts.sort(function(a, b) {
      let nameA = a.name.toLowerCase(),
        nameB = b.name.toLowerCase();
      if (nameA < nameB) {
        return -1;
      } else if (nameA > nameB) {
        return 1;
      } else {
        return 0;
      }
    });

    this.setState({
      contacts: sortedContacts
    });
  };

  handleContactClick = contact => {
    let openContact = this.state.activeContact.name === contact.name;

    this.setState({
      // displayContact: openContact ? false : true,
      activeContact: openContact ? {} : contact
    });
  };

  toggleFavorite = selectedContact => {
    const updatedContact = [...this.state.contacts].map(contact =>
      contact.id === selectedContact.id
        ? Object.assign(contact, { isFavorite: !contact.isFavorite })
        : contact
    );
    this.setState({
      contact: updatedContact
    });
  };

  render() {
    return (
      <div>
        {this.state.activeContact.name ? (
          <ContactDetails
            contacts={this.state.contacts}
            activeContact={this.state.activeContact}
            handleContactClick={this.handleContactClick}
            toggleFavorite={this.toggleFavorite}
          />
        ) : (
          <ContactList
            contacts={this.state.contacts}
            displayContact={this.state.displayContact}
            activeContact={this.state.activeContact}
            handleContactClick={this.handleContactClick}
            toggleFavorite={this.toggleFavorite}
          />
        )}
      </div>
    );
  }
}

export default withRouter(App);
