const express = require("express");
const app = express();
const port = 4000;

const mongoDB = require("./db")
mongoDB();

app.get('/', (req,res) =>{
    res.send("Hello");
});

app.use(express.json());
app.use('/api', require("./Routes/createuser"));

app.listen(port,() =>{
    console.log(`server connection established on port ${port}`);
});

