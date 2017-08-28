var express = require("express");
var passport = require("passport");

var router = express.Router();

var viewsCtrl = require(".././controllers/views.js");
var userCtrl = require(".././controllers/auth.js");

router.get("/",viewsCtrl.index);
router.get("/logIn", viewsCtrl.logIn);
router.get("/signUp",viewsCtrl.signUp);
router.post("/auth/signUp", userCtrl.signUp);
router.post("/auth/signIn", passport.authenticate("local", {
        successRedirect : "/",
        failureRedirect : "/auth/signIn"
    }));

module.exports = router;
