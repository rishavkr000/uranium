const express = require('express');
const router = express.Router();

const batchController= require("../controllers/batchController")

router.post("/createBatch", batchController.createBatch  )

router.post("/createDeveloper", batchController.createDeveloper )

router.get("/scholarship-developers", batchController.scholarship_developers)

router.get("/developers", batchController.developers)

module.exports = router;