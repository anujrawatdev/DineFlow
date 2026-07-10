const express = require('express');
const userRoutes = require('./routes/user.routes');
const cors = require('cors');

const app = express();

app.use(cors({
    origin:"http://localhost:3000",
    credentials:true,
}));

app.use(express.json());
app.use(userRoutes);


module.exports = app;