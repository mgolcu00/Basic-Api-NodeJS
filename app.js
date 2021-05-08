const express = require('express');
const mongoose = require('mongoose');

// Create Express App
const app = express();
app.use(express.json())

// Server side
const PORT = 3000;

app.listen(PORT, () => {
    console.log("Listening on port " + PORT);
});

// Database
mongoose.connect('mongodb://localhost/basicdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.once('open', () => {
    console.log("Connected to MongoDB...");
});

// Routes 
app.get('/', (req, res) => {
    res.send("This is root! Hello.")
});

const HabitsRoute = require('./routes/Habits');

app.use('/habits', HabitsRoute);
