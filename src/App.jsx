import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactForm from 'components/ContactForm/ContactForm';
import PhonebookList from 'components/PhonebookList/PhonebookList';
import Filter from 'components/Filter/Filter';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleAddContact = (nameFromForm, numberFromForm) => {
    let isPresent = false;
    const contact = {
      id: uuidv4(),
      name: nameFromForm,
      number: numberFromForm,
    };
    const { contacts } = this.state;
    contacts.forEach(el => {
      if (el.name === contact.name) {
        alert(`${el.name} is already in contacts.`);
        isPresent = true;
        return;
      }
    });

    if (isPresent) return;
    this.setState(prevState => {
      return { contacts: [...prevState.contacts, contact] };
    });
  };

  handleFilter = filter => {
    this.setState({ filter });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(el => el.name.toLowerCase().includes(filter.toLowerCase()));
  };

  handleDeleteContact = id => {
    const { contacts } = this.state;
    this.setState({ contacts: [...contacts.filter(el => el.id !== id)] });
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = this.getFilteredContacts();
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={this.handleAddContact} />
        <h2>Contacts</h2>
        {contacts.length > 1 && <Filter value={filter} onFilterChange={this.handleFilter} />}
        {filteredContacts.length > 0 && (
          <PhonebookList contacts={filteredContacts} onDelete={this.handleDeleteContact} />
        )}
      </>
    );
  }
}