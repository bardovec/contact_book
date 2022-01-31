import React, { useState } from 'react';

import { useDispatch } from 'react-redux';

import { deleteContact } from '../../redux/actions/contacts';

import ConfirmModal from '../Modals/ConfirmModal';
import DetailModal from '../Modals/DetailModal';

import img from '../../images/2863102.png';

import './style.css';

const ContactItem = ({ contact, currentId }) => {
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();

  const openModal = () => {
    setShowModal(!showModal);
    window.scroll(0, 0);
  };
  const handleSubmit = () => {
    dispatch(deleteContact(contact._id));
  };

  return (
    <div className='item'>
      <div className='item_info'>
        <img className='item__img' src={contact.selectedFile || img} alt='image' />
        <h2 className='item__name '>{contact.name}</h2>
      </div>
      <div className='item-contact_info'>
        <i className='fas fa-address-book icon-contact__gradient'>{contact.surname}</i>
        <i className='fas fa-phone icon-contact__gradient'>{contact.phone}</i>
      </div>
      <div className='info__btns'>
        {showModal ? <DetailModal currentId={currentId} contact={contact} openModal={openModal} />
          : <button className='btn' onClick={openModal}> Детали</button>}
        <ConfirmModal className='btn-remove' onClick={handleSubmit} text='Удалить контакт' />
      </div>

    </div>
  );
};

export default ContactItem;
