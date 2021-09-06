import s from "./ContactsList.module.css";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import {deleteContact} from '../../redux/contacts/contacts-actions';

const ContactsList = ({contacts, filter, deleteContactDispatch}) => {
  let newFilter = contacts
    if (filter) {
      newFilter = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase()))
     }
  return (
    <div>
    <ul className={s.list}>
    {newFilter.map(
      contact => (
        <li className={s.item}
          key={contact.id}>
          {contact.name}{' '}
          {contact.number}{' '}
          <button className={s.button} onClick={() => deleteContactDispatch(contact.id)}>Delete</button>
        </li>
       ))}
    </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  return ({
    contacts: state.contacts.items,
    filter: state.contacts.filter,
  });
}

const mapDispatchToProps = dispatch => ({
  deleteContactDispatch: (contactId) => dispatch(deleteContact(contactId))
});

ContactsList.propTypes = {
  filter: PropTypes.string,
  contacts: PropTypes.array,
  deleteContact: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);