const mongoose = require("mongoose");

mongoose.set('strictQuery', false);

mongoose
    // .connect("mongodb://127.0.0.1:27017/whatscAppClone")
    .connect(process.env.mongodb_URL)
    .then(() => console.log("db connected!"))
    .catch((err) => console.log(err.message));