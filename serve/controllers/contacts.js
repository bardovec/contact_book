import ContactMessage from "../models/contactMessage.js";
import mongoose from "mongoose";



export const getContacts = async (req, res) => {
    try {
        const contactMessage = await ContactMessage.find()
        res.status(200).json(contactMessage)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const createContacts = async (req, res) => {
    const contacts = req.body
    const newContactMessage = new ContactMessage(contacts)
    try {
        await newContactMessage.save()
        res.status(201).json(newContactMessage)
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}

export const updateContacts = async (req, res) => {
    const {id: _id} = req.params
    const contact = req.body

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with tha id');

    const updatedContact = await ContactMessage.findByIdAndUpdate(_id, {...contact, _id}, {new: true});
    res.json(updatedContact)
}
export const deleteContacts = async (req, res) => {

    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with tha id');

    await ContactMessage.findByIdAndRemove(id)

    res.json({message: 'Post deleted!'})

}
