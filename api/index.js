require("dotenv").config();
const express = require("express")
const app = express();
const mongoose = require("mongoose");

const authRoute = require("./routes/authRoute");
const userRoute = require("./routes/userRoute");
const movieRoute = require("./routes/movieRoute");
const listRoute = require("./routes/listRoute");

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => console.log("DB is connected"))
.catch(err => console.log(err));

app.use(express.json());

// Route middleware
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/movies", movieRoute);
app.use("/api/lists", listRoute);

app.listen(3001, () =>{
    console.log("Backend server is running");
})