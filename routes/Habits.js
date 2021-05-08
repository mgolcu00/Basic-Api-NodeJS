const express = require('express');
const router = express.Router();
const Habit = require('../models/Habit');

// Get All Habits
router.get('/', async (req, res) => {
    const habits = await Habit.find();
    res.json(habits);
});

// Get Habit from Id

router.get('/:id', async (req, res) => {
    const habit = await Habit.findById({ _id: req.params.id });
    res.json(habit)
});

// Create New Habit 

router.post('/', async (req, res) => {
    const newHabit = new Habit(req.body)
    const savedHabit = await newHabit.save()
    res.json(savedHabit)
});

// Update Habit
router.patch('/:id', async (req, res) => {
    const habit = await Habit.updateOne({ _id: req.params.id }, { $set: req.body });
    res.json(habit)
});

// Delete Habit 
router.delete('/:id', async (req, res) => {
    const result = await Habit.findByIdAndDelete({ _id: req.params.id });
    res.json(result)
});


module.exports = router