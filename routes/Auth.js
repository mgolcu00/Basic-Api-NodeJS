const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const { registerValidation, loginValidation } = require('../validation')

// Register
router.post('/register', async (req, res) => {

    // validation 
    const { error } = registerValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // Checking if the user already exist
    const emailExist = await User.findOne({ email: req.body.email });
    if (emailExist) return res.status(400).send("Email already exist.");

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    // Creating new User
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    });
    try {
        const savedUser = await user.save();
        res.send({id:savedUser._id});
    } catch (err) {
        res.status(400).send(err);
    }
});


// Login
router.post('/login', async (req, res) => {
    // validation 
    const { error } = loginValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // Checking if email exist.
    const user = await User.findOne({ email: req.body.email })
    if (!user) return res.status(400).send("Email not found");

    // Checking password
    const validPass = await bcrypt.compare(req.body.password,user.password);
    if(!validPass) return res.status(400).send("Invalid password");

    res.send("Logged in");

})

module.exports = router