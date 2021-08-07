const express = require('express');
const mongoose = require('mongoose');

// Connect, test database
mongoose.connect('mongodb://localhost:27017/pastex', {useNewUrlParser: true, useUnifiedTopology: true});
let db = mongoose.connection;

db.once('open', () => {
    console.log('Connected to database');
});
db.on('error', (err) => {
    console.log(err);
});

const app = express();

// CORS
const cors = require('cors');
app.use(cors());

// Routes
const pastesRoute = require('./routes/pastes')
app.use('/api/v1/pastes', pastesRoute);

app.listen(8081, () => {
    console.log('Server listening on 8081');
})