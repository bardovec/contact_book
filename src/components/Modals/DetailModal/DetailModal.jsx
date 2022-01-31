import React, {
  useEffect, useRef, useState,
} from 'react';
import './style.css';
import { useDispatch } from 'react-redux';
import {  updateContact } from '../../../redux/actions/contacts';

const DetailModal = ({ openModal, contact, currentId }) => {
  const [data, setData] = useState({ name: '', surname: '', phone: '' });

  const dispatch = useDispatch();
  // state для создания полей
  const [info, setInfo] = useState([]);

  const currId = contact._id;


  /*одно из того как я пытался это сделать*/
  // function usePrevious(value, name) {
  //   const ref = useRef();
  //   useEffect(() => {
  //     ref.current = value;
  //   }, [value]);
  //   return setData({...data, [name]: [ref.current] });
  // }

  const updateInfo = () => {
    dispatch(updateContact(currId, data));
  };
  const addInfo = () => {
    setInfo([...info, { title: '', description: '', number: Date.now() }]);
  };
  const removeInfo = (number) => {
    setInfo(info.filter((i) => i.number !== number));
  };
  const changeInfo = (key, value, number) => {
    setInfo(info.map((i) => (i.number === number ? { ...i, [key]: value } : i)));
  };

  return (
    <div >
      <div className='modal-details'>
        <header className='hero'>
          <div className='hero-info'>
            <h1 className='name'>{contact.name}</h1>
            <p className='relationship-hero'>{contact.surname}</p>
          </div>
          <i onClick={openModal} className="fas fa-times close-icon">Close</i>
        </header>

        <section className='contact-info'>


          <div className='info-line'>
            <i className='fas fa-user-friends icon-gradient' />
            <input
              value={data.name}
              type='text'
              className='type'
              name='name'
              placeholder={contact.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
          </div>
          <div className='info-line'>
            <i className='fas fa-user-friends icon-gradient' />
            <input
              value={data.surname}
              type='text'
              className='type'
              name='fullname'
              placeholder={contact.surname}
              onChange={(e) => setData({ ...data, surname: e.target.value })}
            />
          </div>

          <div className='info-line'>
            <i className='fas fa-phone icon-gradient' />
            <input
              value={data.phone}
              type='text'
              className='type'
              name='phone-number'
              onChange={(e) => setData({ ...data, phone: e.target.value })}
              placeholder={contact.phone}
            />
          </div>

        </section>

        {info.map((i) => (
          <div className='add_fields' key={i.number}>
            <div className='update-contact'>
              <input
                className='type'
                value={i.title}
                onChange={(e) => changeInfo('title', e.target.value, i.number)}
                placeholder='Введите название'
              />
            </div>
            <div className='update-contact'>
              <input
                className='type'
                value={i.description}
                onChange={(e) => changeInfo('description', e.target.value, i.number)}
                placeholder='Введите описание '
              />
            </div>
            <div className='remove-field-btn'>
              <button
                className='button-remove'
                onClick={() => removeInfo(i.number)}
              >
                Удалить
              </button>
            </div>
          </div>
        ))}
        <section className='button-container'>
          <div className='update-contact'>
            <i className='fas fa-check-circle icon-gradient' />
            <button onClick={updateInfo} className='button'>Save Contact</button>
          </div>
          <div className='update-contact'>
            <i className='fas fa-plus icon-gradient' />
            <button onClick={addInfo} className='button'>Add field</button>
          </div>
        </section>

      </div>
    </div>

  );
};

export default React.memo(DetailModal);
