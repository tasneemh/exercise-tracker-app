const express = require("express");
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors())

const port = process.env.PORT || 5000; 

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

const connection = mongoose.connection;

connection.once('open', ()=>{
  console.log("MongoDB database is connected successfully");
})
.on('error', (err)=>{
  console.log(err);
});


app.get("/", (req, res) => {
  res.send("Hello!");
});
app.listen(port, () => {
  console.log(`Server app listening on port ${port}!`);
});