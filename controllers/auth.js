'use strict';

const mongoose = require("mongoose");
const User = require("../models/user");

function signUp (req, res) {
    console.log(req.body);
    var user = new User({
        completeName: req.body.CName,
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password
    });
    user.save((err, userSaved) => {
        if (err){
            res
                .status(500)
                .send(`Error al guardar en base de datos:: ${err}`);
        }
        res
            .status(200)
            .send(`Producto guardado satisfactoriamente: ${userSaved}`);
    });
};

module.exports = {
    signUp
};