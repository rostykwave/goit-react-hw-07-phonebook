import { ContactForm } from './components/ContactForm';
import { ContactList } from './components/ContactList';
import { Container } from './components/Container';
import { Filter } from './components/Filter';
import { contactsOperations } from 'redux/contacts';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <h1>PhoneBook</h1>
      <ContactForm />
      <h1>Contacts</h1>
      <Filter />
      <ContactList />
    </Container>
  );
};
