const express = require('express');

const app = express();

// Routes
const pastesRoute = require('./routes/pastes')
app.use('/api/v1/pastes', pastesRoute);

app.listen(8081, () => {
    console.log('Server listening on 8081');
})