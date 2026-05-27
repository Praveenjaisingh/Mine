const express = require('express');
const cors = require('cors');
const path = require("path");

const birthdayRoutes = require('./Routes/birthdayRoutes');
const errorHandler = require("./Middleware/errorHendler");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../public")));
app.use('/api/birthday', birthdayRoutes);
app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,"../public/loader.html"));
});
app.use(errorHandler);

module.exports = app;