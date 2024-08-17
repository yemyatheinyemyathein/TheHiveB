require("dotenv").config();
const express = require("express");
const UserRoutes = require("./routes/UserRoutes");
const AdminRoutes = require("./routes/AdminRoutes");
const connectDB = require("./util/db");
const cors = require('cors');

const app = express();
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
  }));
  
app.use(express.json());

app.use("/", (req, res, next) => {
    console.log("My Route is running");
    next();
});

app.use(UserRoutes);
app.use('/admin',AdminRoutes);

connectDB().then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`My Server is Running at ${process.env.PORT}`);
    });
}).catch(error => {
    console.log("This is Runtime Error", error.message);
});
