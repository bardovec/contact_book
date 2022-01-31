import {
  FETCH_ALL, CREATE, UPDATE, DELETE,
} from '../../constants/actionTypes';

import * as api from '../../api';

export const getContacts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchContacts();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const createContact = (contact) => async (dispatch) => {
  try {
    const { data } = await api.createContacts(contact);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateContact = (id, contact) => async (dispatch) => {
  try {
    const { data } = await api.updateContacts(id, contact);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteContact = (id) => async (dispatch) => {
  try {
    await api.deleteContacts(id);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};
