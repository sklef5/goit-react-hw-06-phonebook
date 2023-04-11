import PropTypes from 'prop-types';
import { Contact, Button, List, Span } from './ContactList.styled';
import { removeContacts } from '../Redux/createSlice';
import { useDispatch, useSelector } from 'react-redux';
import { isContentEditable } from '@testing-library/user-event/dist/utils';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);

  const contactFilter = () => {
    if (contacts.filter === '') return contacts.contacts;
    return contacts.contacts.filter(item =>
        item.name.toLowerCase().includes(contacts.filter)
    );
  };
  const contactList = contactFilter();
  return (
    <List>
      {contactList.map(({ name, number, id }) => {
                return (
                    <Contact key={id}>
                        <Span>
                            {name}: {number}
                        </Span>
                        <Button type="button" onClick={() => dispatch(removeContacts(id))}>
                            Delete
                        </Button>
                    </Contact>
                );
            })}
    </List>
  );
};

export default ContactList;

// ContactList.propTypes = {
//     contacts: PropTypes.array.isRequired,
//     onDelete: PropTypes.func.isRequired,
// };
