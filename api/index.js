// Packages importing
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, './.env') })
const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Routes Importing
const authRoute = require("./routes/auth");
const usersRoute = require("./routes/users");

// DB Connection
const mongoose_connection_link = `mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_CLUSTER}.nbkkl.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`
mongoose.connect(mongoose_connection_link, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Successfully connected to DB");
}).catch((err) => {
    console.log(err);
})

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routing Middlewares
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);

// Server port
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});