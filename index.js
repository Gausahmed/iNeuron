const mongoose = require("mongoose")
const express = require("express")

const app = express()
const DATABASE = "mongodb://mymongo:27017/testup";

mongoose.connect(DATABASE)
.then( () => {
    console.log("DB Connected !!")
})
.catch(() => {
    console.log("Error in DB");
} );


app.get("/", (req, res) => {
    res.json({
        message: "you are visitng ROOT route"
    });
} );

app.listen(8000 , () => {
    console.log("8000 is ready to serve...");
});
