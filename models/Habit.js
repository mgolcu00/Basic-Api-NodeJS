const mongoose = require('mongoose')

const HabitSchema = new mongoose.Schema({
    title: String,
    isDone: Boolean,
});

module.exports = mongoose.model('Habit', HabitSchema);