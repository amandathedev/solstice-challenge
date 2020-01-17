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
    // this.sortContacts();
  }

  fetchContacts = () => {
    // fetch("https://s3.amazonaws.com/technical-challenge/v3/contacts.json")
    // !! Sets up mock API using the given JSON data. The provided link not functioning properly
    fetch("https://api.myjson.com/bins/e32o6")
      .then(resp => resp.json())
      .then(contacts => {
        this.setState({
          contacts
        });
      })
      .then(() => this.sortContacts())
      .catch(alert);
  };

  // Sort contacts alphabetically
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
    // Map over the contacts array in state. Use spread to preserve original array
    const updatedContact = [...this.state.contacts].map(contact =>
      // Find the contact whose id is the same as the contact passed in to this function
      contact.id === selectedContact.id
        ? // Create an object with the existing data and the new data for isFavorite, which is toggled
          Object.assign(contact, { isFavorite: !contact.isFavorite })
        : // If the current contact's ID does not match, return that contact (leave it alone)
          contact
    );

    // Update the contact in state
    this.setState({
      contact: updatedContact
    });
  };

  render() {
    return (
      <div>
        {/* If there is an activeContact in state (if not, it won't have a name) */}
        {this.state.activeContact.name ? (
          // Display the ContactDetails component
          <ContactDetails
            // And pass in the necessary props
            contacts={this.state.contacts}
            activeContact={this.state.activeContact}
            handleContactClick={this.handleContactClick}
            toggleFavorite={this.toggleFavorite}
          />
        ) : (
          // Otherwise display the ContactList component
          <ContactList
            // And pass in the necessary props
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
