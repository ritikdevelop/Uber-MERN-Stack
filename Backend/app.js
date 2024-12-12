const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const app = express();
const CookieParser = require('cookie-parser');  
const connectToDB = require('./db/db');
const userRoutes = require('./routes/user.routes');



connectToDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(CookieParser());





app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.use('/users', userRoutes);




module.exports = app;