const router = require('express').Router();
const { application } = require('express');
const { isGuest, isAuth, isOwner } = require('../middleware/guards');
const { register, login, logout, getProfile, updateProfileInfo } = require('../services/users');
const mapErrors = require('../utils/mappers');

router.post('/register', isGuest(), async (req, res) => {
    try {
        if (req.body.password.trim() == '' || req.body.email.trim() == '') {
            throw new Error('Email and password are required');
        }

        const result = await register(req.body.username,req.body.email.trim().toLowerCase(), req.body.password.trim(), req.body.tel);
        res.status(201).json(result);
    } catch (err) {
        console.error(err.message);
        const error = mapErrors(err);
        res.status(400).json({ message: error });
    }
});

router.post('/login', isGuest(),async (req, res) => {
    try {
        const result = await login(req.body.email.trim().toLowerCase(), req.body.password.trim());
        res.json(result);
    } catch (err) {
        console.error(err.message);
        const error = mapErrors(err);
        res.status(400).json({ message: error });
    }
});

router.get('/profile', isAuth(), async (req,res) =>{
    try{
        const result = await getProfile(req.user);
        res.status(200).json(result);
    } catch (err) {
        console.error(err);
        const error = mapErrors(err);
        res.status(400).json({ message: error});
    }
});

router.put('/profile', isOwner(), async (req,res) => {
    const id = req.params.id;
    const user = {
        username: req.body.username,
        email: req.body.email,
        tel: req.body.tel
    };
     try {
         const result = await updateProfileInfo(id, user);
         res.json(result);
     } catch (err) {
         const error = mapErrors(err);
         console.error(err.message);
         res.status(400).json({ message: error });
     }
});

router.get('/logout', (req, res) => {
    logout(req.user?.token);
    res.status(204).end();
});

module.exports = router;
