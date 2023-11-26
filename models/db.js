const mongoose = require("mongoose");

mongoose.set('strictQuery', false);

mongoose
    // .connect("mongodb://127.0.0.1:27017/whatscAppClone")
    .connect("mongodb+srv://akashlowanshi86126:h91hOV6rJkJjZLNE@cluster0.ggu19ho.mongodb.net/?retryWrites=true&w=majority")
    .then(() => console.log("db connected!"))
    .catch((err) => console.log(err.message));