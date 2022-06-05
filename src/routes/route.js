const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})



router.get("/appointment/sessions", CowinController.getByDistrictId)
router.get("/weather", CowinController.weatherReport)
router.get("/sortTemperature", CowinController.sortTemperature)

router.post("/memes", CowinController.memesCreater)



module.exports = router;