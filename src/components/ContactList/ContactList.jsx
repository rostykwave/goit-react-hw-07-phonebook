import { DeleteBtn, Item, List } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { contactsActions } from 'redux/contacts/contacts-actions';
import { getVisibleContacts } from 'redux/contacts/contacts-selectors';

export const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(contactsActions.deleteContact(id));

  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <Item key={id}>
          <span>
            {name}: {number}
          </span>
          <DeleteBtn type="button" onClick={() => onDeleteContact(id)}>
            Delete
          </DeleteBtn>
        </Item>
      ))}
    </List>
  );
};
