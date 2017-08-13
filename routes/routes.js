const express = require("express");
const router = express.Router();

const viewsCtrl = require(".././controllers/views.js");
const userCtrl = require(".././controllers/auth.js");

router.get("/",viewsCtrl.index);
router.get("/logIn", viewsCtrl.logIn);
router.get("/signUp",viewsCtrl.signUp);
router.post("/auth/signUp", userCtrl.signUp);

module.exports = router;
