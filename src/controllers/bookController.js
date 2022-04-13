const { count } = require("console")
const { restart } = require("nodemon")
const bookModel = require("../models/bookModel")
const BookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const bookList= async function (req, res) {
    let allBooks = await BookModel.find().select("bookName authorName")
    res.send({msg: allBooks})
}

const getBooksInYear= async function (req, res) {
    let allBooks = await BookModel.find({year: req.body.year})

    res.send({msg: allBooks})
}


const getParticularBooks= async function (req, res) {
    let allBooks= await BookModel.find( { 
        $or: [ {"bookName" : req.body.bookName} , {"authorName" : req.body.authorName } , {  "year": req.body.year } ]
    } )
    res.send({msg: allBooks})
}

const getXINRBooks= async function(req, res){
    let bookPrice = await BookModel.find
    ({
        "prices.indianPrice":
            {
                $in: ["100INR", "200INR", "500INR"]
            }
    })
    res.send({msg: bookPrice})
}


const getRandomBooks= async function (req, res) {
    let randomBooks = await BookModel.find({
        $or: [{stockAvailable: true}, {totalPages: {$gt:  500} }]
    })
    res.send({msg: randomBooks})
}
    


module.exports.createBook= createBook
module.exports.bookList= bookList
module.exports.getBooksInYear= getBooksInYear
module.exports.getParticularBooks= getParticularBooks
module.exports.getXINRBooks= getXINRBooks
module.exports.getRandomBooks= getRandomBooks