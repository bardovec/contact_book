import React from 'react';

import { useSelector } from 'react-redux';

import ContactItem from '../ContactItem';

import './style.css';

const ContactList = ({ currentId, setCurrentId }) => {
  const contacts = useSelector((state) => state.contacts);

  return (

    !contacts.length ? 'No contacts YET' : (
      <div className='list_container'>
        {contacts.map((contact) => (
          <div key={contact._id}>
            <ContactItem currentId={currentId} contact={contact} setcurrentId={setCurrentId} />
          </div>
        ))}
      </div>
    )

  );
};

export default ContactList;
