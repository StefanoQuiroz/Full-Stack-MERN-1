const express = require('express');
const app = express();
require("dotenv").config();
const cors = require('cors');

require("./config/mongoDB")();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/api", require("./routes/api"));



const PORT = process.env.PORT;
app.listen(PORT, ()=>{
    console.log(`Listen at port: ${PORT}`);
})



