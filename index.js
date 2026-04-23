const express = require('express');
const mongoose = require('mongoose');
const router = require('./router/routes');  
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 210;

console.log('damnn777');

app.use(cors({
  origin: '*',  
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],  
  allowedHeaders: ['Content-Type', 'Authorization'], 
}));

app.use(express.json());
app.use('/', router);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const dbURI = 'mongodb+srv://khad1234:khad1234@cluster0.hekpe.mongodb.net/hospital';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Successfully connected to the database 1235u.");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });
