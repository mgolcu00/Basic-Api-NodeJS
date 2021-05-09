const express = require('express');
const router = express.Router();
const Joi = require('joi') // for validation
const User = require('../models/User')

const validationSchema = Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().min(3).required().email(),
    password: Joi.string().min(6).required()
});

// Register 
router.post('/register', async (req, res) => {
    // validation sending
    const {error} = validationSchema.validate(req.body);
    res.send(error.details[0].message);

    //   const user = new User({
    //     name: req.body.name,
    //     email: req.body.email,
    //     password: req.body.password
    // });
    // try {
    //     const savedUser = await user.save();
    //     res.send(savedUser);
    // } catch (err) {
    //     res.status(400).send(err);
    // }
});
module.exports = router