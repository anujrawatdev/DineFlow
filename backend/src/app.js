const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const path = require('path');

const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/user.routes');
const adminRoutes = require("./routes/admin.routes");
const ownerRoutes = require('./routes/owner.routes');
const restaurantRoutes = require('./routes/restaurant.routes');
const bookingRoutes = require('./routes/booking.routes');

const app = express();

app.use(cors({
    origin:["http://localhost:3000",
        "https://dineflow-iwa6z6vtt-anuj-rawat.vercel.app"
    ],
    credentials:true,
}));

app.use(express.json());
app.use(cookieParser());
app.use(express.static("public"));
app.use("/uploads",express.static(path.join(__dirname,"uploads")));
console.log("Uploads Folder Path:", path.join(__dirname, 'uploads'));

app.use(authRoutes);
app.use(userRoutes);
app.use(adminRoutes);
app.use(ownerRoutes);
app.use(restaurantRoutes);
app.use(bookingRoutes);


module.exports = app;