const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.mongo_url).then(()=>{
    console.log('connected to database');
})

app.listen(process.env.PORT||5001,()=>{
    console.log('connected to port');
})