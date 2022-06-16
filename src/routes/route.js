const express = require('express');
const router = express.Router();
const assignmentController= require("../controllers/assignmentController")
const commonMiddlewares = require("../middlewares/commonMiddlewares")

router.post("/createUser", commonMiddlewares.headerValid, assignmentController.createUser)
router.post("/createProduct", assignmentController.createProduct  )
router.post("/createOrder", commonMiddlewares.headerValid, assignmentController.createOrder )



module.exports = router;