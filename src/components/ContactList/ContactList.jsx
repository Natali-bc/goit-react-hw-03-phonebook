import React from 'react';
import PropTypes from 'prop-types';
import ContactListItem from './ContactListItem.jsx';
import styles from '../ContactList/ContactList.module.css';

const ContactList = ({ visibleContacts, handleDelete }) => {
  return (
    <ul className={styles.contactList}>
      {visibleContacts.map(contact => {
        return (
          <ContactListItem
            contact={contact}
            key={contact.id}
            handleDelete={() => handleDelete(contact.id)}
          />
        );
      })}
    </ul>
  );
};
ContactList.propTypes = {
  visibleContacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ),
  handleDelete: PropTypes.func.isRequired,
};

export default ContactList;
