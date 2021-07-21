import React from 'react';
import './ContactList.css';

const ContactList = ({contacts, deleteContact}) => (
  <ul className="contact-list">
      {contacts.map(contact => 
        <li className="contact-list-item" >
          <p className="contact-name"> {contact.name}</p>
          <p className="contact-number"> {contact.number}</p>

      <button type="button" className="delete-btn" onClick={() => deleteContact(contact.id)}>Delete contact</button>
        </li>)
      }

</ul>
)

export default ContactList;