const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();


const allController= require("../controllers/allController")


router.post("/createAuthor", allController.createAuthor)

router.post("/createPublisher", allController.createPublisher)

router.post("/createBook", allController.createBook)

router.get("/getAllBooks", allController.getAllBooks)

router.put("/updateHardcore", allController.updateHardcore)

router.put("/priceUpdate", allController.priceUpdate)

module.exports = router;