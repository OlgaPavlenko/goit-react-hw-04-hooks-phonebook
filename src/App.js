import React, { useState, useEffect } from 'react';
import Form from './Components/Form/Form';
import ContactList from './Components/ContactList/ContactList';
import Filter from './Components/Filter/Filter';

export default function App() {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  const addContact = contact => {
    const isFinded = contacts.find(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase(),
    );
    if (isFinded) {
      alert(`${contact.name} is already in the contacts`);
      return;
    }
    setContacts(state => [contact, ...state]);
  };

  const onFilterChanged = filter => {
    setFilter(filter);
  };

  const filterContactList = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  const onDelete = rId => {
    setContacts(contacts.filter(({ id }) => id !== rId));
  };

  useEffect(() => {
    const parsedContacts = JSON.parse(window.localStorage.getItem('contacts'));
    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const filteredContactList = filterContactList();

  return (
    <>
      <Form onSubmit={addContact} />
      <Filter onFilterChanged={onFilterChanged} />
      <ContactList contactsList={filteredContactList} onDelete={onDelete} />
    </>
  );
}
