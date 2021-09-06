import React from "react";
import ContactsList from "./contactsList/ContactsList";
import Container from "./container/Container";
import CreateContactForm from "./createContactForm/CreateContactForm";
import FilterContacts from "./filterContacts/FilterContacts";


const App = () => {
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

export default App;

