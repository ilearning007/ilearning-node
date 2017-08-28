const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//bcrypt para contraseña pendiente

const userSchema =  Schema({

    completeName:   String,
    country:        String,
    MLanguage:      String,
    info:           String,
    avatar:         String,

    userName: {
        type:       String,
        unique:     true
    },
    email: {
        type:       String,
        unique:     true
    },
    password: {
        type:       String,
        select:     false
    },
    signupDate: {
        type:       Date,
        default:    Date.now()
    },
    points: {
        type:       Number,
        default:    0
    }
    
});

module.exports = mongoose.model("User",userSchema);