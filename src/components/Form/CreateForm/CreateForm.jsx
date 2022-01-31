import React, { useState } from 'react';

import FileBase from 'react-file-base64';

import { useDispatch, useSelector } from 'react-redux';

import { createContact } from '../../../redux/actions/contacts';

import './style.css';

const CreateForm = ({ currentId, setCurrentId }) => {
  const [contactData, setContactData] = useState({
    name: '', surname: '', phone: '', selectedFile: '',
  });
  // eslint-disable-next-line no-unused-vars
  const contact = useSelector((state) => (currentId ? state.contacts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(createContact(contactData));
    clear();
  };

  const clear = () => {
    setCurrentId(0);
    setContactData({
      name: '', surname: '', phone: '', selectedFile: '',
    });
  };

  return (
    <div>
      <div className='paper'>
        <p className='paper__title'>Добавить контакт</p>
        <form className='form' onSubmit={handleSubmit}>
          <i className='fas fa-address-book form-field__label'>Имя</i>
          <input className='form__input' onChange={(e) => setContactData({ ...contactData, name: e.target.value })} type='text' name='name' id='login' value={contactData.name} />
          <i className='fas fa-address-book form-field__label'>Фамилия</i>
          <input
            className='form__input'
            name='surname'
            onChange={(e) => setContactData({ ...contactData, surname: e.target.value })}
            required
            value={contactData.surname}
          />
          <i className='fas fa-phone form-field__label'>Телефон</i>

          <input
            className='form__input'
            name='phone'
            onChange={(e) => setContactData({ ...contactData, phone: e.target.value })}
            required
            value={contactData.phone}
          />
          <div className='fileInput'>
            <FileBase
              type='file'
              multiple={false}
              onDone={({ base64 }) => setContactData({
                ...contactData,
                selectedFile: base64,
              })}
            />
          </div>
          <button className='form__btn' type='submit'>
            Добавить
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateForm;
