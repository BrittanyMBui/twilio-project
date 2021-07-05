const express = require('express');
const app = express();
const mongoose = require('mongoose');
const connectionString = 'mongodb://127.0.0.1:27017/survey'

mongoose
    .connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('Mongodb connected')
    })

const PORT = 2000;

app.get('/', (req, res) => {
    res.send('<h1>Survey</h1>');
});

app.listen(PORT, () => {
    console.log(`Server listening at ${PORT}`);
});