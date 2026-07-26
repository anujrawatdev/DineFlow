const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const userRoutes = require('./routes/user.routes');
const adminRoutes = require("./routes/admin.routes");
const ownerRoutes = require('./routes/owner.routes');

const app = express();

app.use(cors({
    origin:"http://localhost:3000",
    credentials:true,
}));

app.use(express.json());
app.use(cookieParser());
app.use(express.static("public"));



app.use(userRoutes);
app.use(adminRoutes);
app.use(ownerRoutes);



module.exports = app;