const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const authCheck = require ("../middlewares/auth")


router.post("/users",  userController.createUser  )

router.post("/login", userController.loginUser)

router.get("/users/:userId", authCheck.authCheck, userController.getUserData)

router.put("/users/:userId", authCheck.authCheck, userController.updateUser)

router.delete("/users/:userId", authCheck.authCheck, userController.deleteUser)

module.exports = router;