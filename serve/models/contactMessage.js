import mongoose from "mongoose";

const contactSchema = mongoose.Schema({
    name: String,
    surname: String,
    phone: String,
    selectedFile: String,
});

let ContactMessage = mongoose.model("ContactMessage", contactSchema)

export default ContactMessage
