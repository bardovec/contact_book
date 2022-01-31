import React, {useEffect, useState} from 'react';

import {useDispatch} from "react-redux";

import {getContacts} from "../../redux/actions/contacts";

import CreateForm from "../../components/Form/CreateForm";
import ContactList from "../../components/ContactList";

import './style.css'

const Main = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getContacts());
  }, [currentId, dispatch]);

  return (
    <div className={'container'}>
      <div className={'navbar'}>
        <CreateForm currentId={currentId} setCurrentId={setCurrentId}/>
      </div>
      <h1 className='main_title'>Yours contact List</h1>
      <ContactList currentId={currentId} setCurrentId={setCurrentId}/>
    </div>
  );
};

export default Main;
