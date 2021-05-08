const express = require('express');
const router = express.Router();

// Get All Habits
router.get('/', async (req, res) => {
    res.send("Get All Habits");
});

// Get Habit from Id

router.get('/:id', async (req, res) => {
    res.send("You Want " + req.params.id + " Habit");
});

// Create New Habit 

router.post('/',async (req,res)=>{
    res.send("Create New Habit");
});

// Update Habit
 router.patch('/:id',async (req,res)=>{
     res.send(req.params.id + "  update habit");
 });

 // Delete Habit 
 router.delete('/:id',async (req,res)=>{
     res.send(req.params.id+"  delete habit");
 });


module.exports = router