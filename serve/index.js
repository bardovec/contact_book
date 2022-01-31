import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

import postRoutes from './routes/contacts.js'


const app = express();
dotenv.config()

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());
/**/
app.use('/contacts', postRoutes);

app.get ('/', (req,res) => {
    res.send('Hello everyone')
})

const CONNECTION_URL = process.env.CONNECTION_URL

const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, ()=> console.log(`Server running on  port: http://localhost:${PORT}`)))
    .catch((error) => console.log(error.message))


