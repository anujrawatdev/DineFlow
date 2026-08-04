const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/user.routes');
const adminRoutes = require("./routes/admin.routes");
const ownerRoutes = require('./routes/owner.routes');
const restaurantRoutes = require('./routes/restaurant.routes');
const bookingRoutes = require('./routes/booking.routes');

const app = express();

app.use(cors({
    origin:["http://localhost:3000",
        "https://dineflow-indol.vercel.app"
    ],
    credentials:true,
}));

app.use(express.json());
app.use(cookieParser());

app.use(authRoutes);
app.use(userRoutes);
app.use(adminRoutes);
app.use(ownerRoutes);
app.use(restaurantRoutes);
app.use(bookingRoutes);


module.exports = app;