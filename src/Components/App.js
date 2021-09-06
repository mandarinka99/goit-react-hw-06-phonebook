import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid';
import ContactsList from "./contactsList/ContactsList";
import Container from "./container/Container";
import CreateContactForm from "./createContactForm/CreateContactForm";
import FilterContacts from "./filterContacts/FilterContacts";
import { connect } from 'react-redux';
import {filterChange, createContact, setContacts} from '../redux/contacts/contacts-actions'

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

  onHandleChange = (e) => {
    const { value } = e.target;
    this.props.onFilterChange(value)
  };

  onSubmit = (number, name) => {
    const find = this.props.contacts.find(contact =>
        contact.name.toLowerCase() === name.toLowerCase())
    if (find) return alert(`${name} is already in contacts`)
    const contactsArr = [...this.props.contacts];
    contactsArr.push({
      id: uuidv4(),
      name,
      number
    });
    //CreateContacts
    this.props.setContacts(contactsArr);
  };

  deleteContact = (id) => {
    const newContactsList = this.props.contacts.filter(contact =>
      contact.id !== id)
      this.props.setContacts(newContactsList);
    }


  render() {
    let newFilter = this.props.contacts
    if (this.props.filter) {
      newFilter = this.props.contacts.filter(contact =>
        contact.name.toLowerCase().includes(this.props.filter.toLowerCase()))
     }

    return (
      <Container>
        <h1>Phonebook</h1>
        <CreateContactForm 
          onSubmit={this.onSubmit} 
        />
        <h2>Contacts</h2>
        <FilterContacts onHandleChange={this.onHandleChange}/>
        <ContactsList 
          contacts={newFilter}
          deleteContact ={this.deleteContact}
        />
      </Container>
    );
  }
  
}

const mapStateToProps = (state) => {
  console.log(`state`, state)
  return ({
    contacts: state.contacts.items,
    filter: state.contacts.filter,
  });
}

const mapDispatchToProps = dispatch => ({
  setContacts: contacts => dispatch(setContacts(contacts)),
  onFilterChange: value => dispatch(filterChange(value)),
  createContact: (name, number) => dispatch(createContact(name, number)),
});



export default connect(mapStateToProps, mapDispatchToProps)(App);
