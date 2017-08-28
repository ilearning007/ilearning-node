'use strict';

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");


const User = require("../models/user");

function signUp (req, res) {

    var salt = bcrypt.genSaltSync(10);
    var pass = bcrypt.hashSync(req.body.password, salt);

    console.log(req.body);
    
    var user = new User({
        completeName: req.body.CName,
        userName: req.body.userName,
        email: req.body.email,
        password: pass
    });

    user.save((err, userSaved) => {
        if (err){
            res.status(500).send(`Error al guardar en base de datos: ${err}`);
        }
        res.status(200).send(`Usuario registrado en base de datos: ${userSaved}`);
    });
};

function signIn (req, res) {
    passport.authenticate("local", {
        successRedirect : "/auth/signIn",
        failureRedirect : "/"
    });
};

module.exports = {
    signUp,
    signIn
};