const express = require("express");
const router = express.Router();
const BookModel = require("../models/bookModel.js");
const BookController = require("../controllers/bookController");
const res = require("express/lib/response");


router.post("/createBook", BookController.createBook);

router.get("/bookList", BookController.bookList);

router.post("/getBooksInYear", BookController.getBooksInYear);

router.post("/getParticularBooks", BookController.getParticularBooks);

router.get("/getXINRBooks", BookController.getXINRBooks);

router.post("/getBooksInYear", BookController.getRandomBooks);

router.get("/getRandomBooks", BookController.getRandomBooks);

module.exports = router;
