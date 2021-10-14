const express = require('express');
const router = express.Router();

const User = require('../model/userModel')

router.get('/user', async(req, res) => {
    try {
        const users = await User.find()
        console.log(users);
        res.send(users)
    } catch (err) {
        console.log(err);
    }

});

router.get('/user/:id', async(req, res) => {
    try {
        const user = await User.findById(req.params.id)
        console.log(user);
        res.send(user)
    } catch (err) {
        console.log(err);
    }

});

router.post('/create', async(req, res) => {
    const user = new User({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub
    })
    try {
        const data = await user.save()
        res.send(data)
        console.log(data)
    } catch (err) {
        console.log(err)
        res.send(err)
    }
})

router.patch('/patchuser/:id', async(req, res) => {
    try {
        const user = await User.findById(req.params.id)
        user.sub = req.body.sub
        const a1 = await user.save()
        res.send(a1)
    } catch (err) {
        console.log(err)
        res.send({ err: err.message })
    }
})

router.delete('/user/:id', async(req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id)
        console.log(user);
        res.send(user)
    } catch (err) {
        console.log(err);
    }

});


module.exports = router;