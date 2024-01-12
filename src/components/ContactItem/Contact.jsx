import React from 'react';
import PropTypes from 'prop-types';

const ContactItem = ({ contact, onDelete }) => (
  <li className="contact-item">
    {contact.name}: {contact.phone}
    <button className="button-del" onClick={onDelete}>Delete</button>
  </li>
);

ContactItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactItem;
