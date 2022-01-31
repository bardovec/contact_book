import axios from 'axios';

const url = 'https://my-project-contact.herokuapp.com/contacts';

export const fetchContacts = () => axios.get(url);
export const createContacts = (newPost) => axios.post(url, newPost);
export const updateContacts = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deleteContacts = (id) => axios.delete(`${url}/${id}`);
