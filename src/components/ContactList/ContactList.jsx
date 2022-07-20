import { DeleteBtn, Item, List } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations } from 'redux/contacts';
import { getVisibleContacts } from 'redux/contacts/contacts-selectors';

export const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(contactsOperations.deleteContact(id));

  return (
    <List>
      {contacts.map(({ id, name, phone }) => (
        <Item key={id}>
          <span>
            {name}: {phone}
          </span>
          <DeleteBtn type="button" onClick={() => onDeleteContact(id)}>
            Delete
          </DeleteBtn>
        </Item>
      ))}
    </List>
  );
};
