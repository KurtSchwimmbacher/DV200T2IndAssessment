const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

// create a new user
router.post('/register',async (req,res) =>{
    const {name, email, password} = req.body;

    try{
        // Hash the password
        const salt = await bcrypt.genSalt(10); // Generate a salt with 10 rounds
        const hashedPassword = await bcrypt.hash(password, salt);


        const user= new User({ name,email,password:hashedPassword });
        await user.save();
        res.status(201).json(user);
    }
    catch (err){
        res.status(400).json({ error: err.message });
    }
});

// Get all users
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});


// Delete a user by ID
router.delete('/delete/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).send();
        }
        res.send(user);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Update a user by ID
router.patch('/update/:id', async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['name', 'email', 'password'];
    const isValidOperation = updates.every(update => allowedUpdates.includes(update));

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' });
    }

    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).send();
        }

        updates.forEach(update => user[update] = req.body[update]);
        await user.save();

        res.send(user);
    } catch (error) {
        res.status(400).send(error);
    }
});


// to login
router.post('/login' ,async (req,res) =>{
    const {email, password} = req.body;

    try {
        // find user email
        const user = await User.findOne({ email });
        if(!user){
            return res.status(400).json({message: 'Invalid Email or Password'});
        }

        // check password
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({message: 'Invalid Email or Password'});
        }

        res.status(200).json({message: 'Login Successful', user});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

module.exports = router; // Export the router