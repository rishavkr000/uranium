const newAuthor = require("../models/newAuthor")
const newBook= require("../models/newBook")
const newPublisher= require("../models/newPublisher")
const mongoose = require("mongoose")

const createAuthor= async function (req, res) {
    let author = req.body
    let authorCreated = await newAuthor.create(author)
    res.send({data: authorCreated})
}

const createPublisher= async function (req, res) {
    let publisher = req.body
    let publisherCreated = await newPublisher.create(publisher)
    res.send({data: publisherCreated})
}

const createBook= async function (req, res) {
    let book = req.body
    let authorValidation = await newAuthor.findById(book.author)
    let publisherValidation = await newPublisher.findById(book.publisher)
    if(authorValidation){
        if(publisherValidation){
            let saveBook = await newBook.create(book)
            res.send({msg: saveBook})
        }
        else{
            res.send({msg: "Publisher not found"})
        }
    }else{
        res.send({msg: "author_Id not found"})
    }
}

const getAllBooks = async function (req, res) {

    let allBooks = await newBook.find().populate(['author','publisher'])
    res.send({msg: allBooks});
}

const updateHardcore = async function (req, res){
    let pubId = await newPublisher.find({name: req.body.publisher})
    let data = await newBook.updateMany(
        {publisher: pubId},
        {$set:{isHardCover:true}}
    )
    res.send({msg: data})
}

// const updateHardcore = async function (req, res) {
//     console.log(req.body)
//         let books = await newBook.updateMany(req.body, {$set:{isHardCover: true}},
//         {new: true, upsert: true})
//         console.log(books)
//         res.send({msg: books})
// }

// const updateHardCover = async function (req,res) {
//     const bodyName = req.body.name
//     let data = await newPublisher.find({name: {$in : bodyName }}).select({_id: 1})
//     console.log(data)
//     let book = await newBook.updateMany({publisher: {$in: data}},{$unset: {isHardCover: false}})
//     console.log(book)
//     res.send({msg: book})
// }

// const updateHardCover = async function (req,res) {
//     newBook.updateMany(
//         {_id:req.params.id},
//         {$set:{isHardCover:req.body.name}}
//     ).then((result)=>{
//         res.send({msg: result})
//     })
// }

const priceUpdate = async (req,res) => {
    let filterAuthor = await newAuthor.find({ratings:{$gt: 3.5}})
    await newBook.updateMany({author:filterAuthor},{$inc:{price:10}})
    let data = await newBook.find()
    res.send({msg: data})
}

module.exports.createAuthor= createAuthor
module.exports.createBook= createBook
module.exports.createPublisher= createPublisher
module.exports.getAllBooks= getAllBooks
module.exports.updateHardcore= updateHardcore
module.exports.priceUpdate= priceUpdate
