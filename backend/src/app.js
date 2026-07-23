const express = require('express');
const userRoutes = require('./routes/user.routes');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const adminRoutes = require("./routes/admin.routes");

const app = express();

app.use(express.json());
app.use(cors({
    origin:"http://localhost:3000",
    credentials:true,
}));
app.use(cookieParser());
app.use(express.static("public"));
app.use(userRoutes);
app.use(adminRoutes);


module.exports = app;