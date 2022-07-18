import { FilterField, FilterInput, FilterLabel } from './Filter.styled';
import { getFilter } from 'redux/contacts/contacts-selectors';
import { useSelector, useDispatch } from 'react-redux';
import { contactsActions } from 'redux/contacts/contacts-actions';

export const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  const onChange = e => dispatch(contactsActions.changeFilter(e.target.value));

  return (
    <FilterField>
      <FilterLabel>Find contacts by name</FilterLabel>
      <FilterInput type="text" value={value} onChange={onChange} />
    </FilterField>
  );
};
