const batchesModel= require("../models/batchesModel")
const developersModel = require("../models/developersModel")


const createBatch= async function (req, res) {
    let batch = req.body
    let batchCreated = await batchesModel.create(batch)
    res.send({data: batchCreated})
}

const createDeveloper= async function (req, res) {
    let developer = req.body
    let developerCreated = await developersModel.create(developer)
    res.send({data: developerCreated})
}

const scholarship_developers = async function (req,res) {
    let checkGen_per = await developersModel.find({percentage: {$gt: 70}, gender: "female"})
    res.send({data: checkGen_per})
}

const developers = async function (req,res) {
    const percent = req.query.percentage
    const pro = req.query.program
    const check = await batchesModel.find({program: pro}).select({_id: 1})
    const finalUpdate = await developersModel.find({percentage: {$gte: percent}, batch: {$in: check}})
    res.send({msg: finalUpdate})
}

module.exports.createDeveloper= createDeveloper
module.exports.createBatch= createBatch
module.exports.scholarship_developers= scholarship_developers
module.exports.developers= developers