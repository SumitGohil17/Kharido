const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
require('../db/connection');

const User = require('../model/userSchema');

router.get('/', (req, res) => {
    res.send('Hello this is server Home page');
})


router.post('/register', async (req, res) => {
    const { username, password } = req.body

    User.findOne({ username: username }).then((userExist) => {
        if (userExist) {
            return res.status(422).json({ message: "user Already Exist" });
        }

        const user = new User({ username, password });
        user.save().then(() => {
            res.status(201).json({ message: "User registered successfully" });
        }).catch((err) => {
            res.status(500).json({ error: "Failed to register" });
        })
    }).catch((error) => {
        console.log(error);
    })
})

router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username: username });
        if (!user) {
            return res.status(401).json({ message: "Invalid username" });
        }
        if (user.password !== password) {
            return res.status(401).json({ message: "Invalid password" });
        }
        const token = await user.generateAuthToken();

        res.cookie("jwttoken", token, {
            expires: new Date(Date.now() + 25892000000),
            httpOnly: true,
        })
        console.log(token);
        res.status(200).json({ message: "Login Successfully", user: { username: user.username } });
    } catch (error) {
        res.status(500).send('Error logging in: ' + error.message);
    }
});
module.exports = router;