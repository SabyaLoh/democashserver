// imp from pack
const express = require('express');
const mongoose = require('mongoose');
//imp from other files
const authRouter = require('./routes/auth');

//init
const PORT = 3000;
const app = express();
const DB = "mongodb+srv://Misha:g81JMabvva39gGmU@cluster0.6btat.mongodb.net/?retryWrites=true&w=majority"
//midleware
app.use(express.json());
app.use(authRouter);

//connetcyions
mongoose.connect(DB).then(()=> {
    console.log('Connection succes')
}).catch(e => {
    console.log(e)
});

app.listen(PORT, "192.168.1.38", () => {
    console.log('connected at port '+ PORT);
});  