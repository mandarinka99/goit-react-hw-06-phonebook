import React, { Component } from "react";
import ContactsList from "./contactsList/ContactsList";
import Container from "./container/Container";
import CreateContactForm from "./createContactForm/CreateContactForm";
import FilterContacts from "./filterContacts/FilterContacts";
import { connect } from 'react-redux';
import { setContacts } from '../redux/contacts/contacts-actions'

class App extends Component {

  componentDidMount() { 
    const contacts = JSON.parse(localStorage.getItem("contacts"));
    contacts &&  this.props.setContacts(contacts);
  }

  componentDidUpdate(prevProps) {
    if (this.props.contacts !==  prevProps.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.props.contacts));
    }
  }

  render() {
    return (
      <Container>
        <h1>Phonebook</h1>
        <CreateContactForm/>
        <h2>Contacts</h2>
        <FilterContacts/>
        <ContactsList 
        />
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    contacts: state.contacts.items,
  });
}

const mapDispatchToProps = dispatch => ({
  setContacts: contacts => dispatch(setContacts(contacts)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
