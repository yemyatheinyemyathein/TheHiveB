const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("My Database is connected");
    } catch (error) {
        console.log("Error Connecting DB => ", error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
