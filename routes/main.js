
const express = require("express");
const mainControllers = require("../controllers/main")

const router = express.Router();

router.get("/",mainControllers.getSignupPage);

router.get('/login_page' ,mainControllers.getLoginPage);

router.get("/welcome",mainControllers.getMainPage);




module.exports = router;