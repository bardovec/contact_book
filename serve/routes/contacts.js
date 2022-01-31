import express from "express";

import { getContacts, createContacts, deleteContacts, updateContacts } from '../controllers/contacts.js'


const router = express.Router();

router.get('/', getContacts )
router.post('/', createContacts)
router.patch('/:id',  updateContacts)
router.delete('/:id', deleteContacts)


export default router
