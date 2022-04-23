const jwt = require('jsonwebtoken')
const mongoose = require('mongoose');

const authCheck = async (req, res, next) => {
    try{
    let id = req.params.userId
    if(!mongoose.isValidObjectId(req.params.userId)) return res.send({msg: "Invalid UserId sent in Params"})
    let token = req.headers['x-Auth-Token'] || req.headers['x-auth-token']
    if(!token) return res.send({msg: 'Token is required.'}) 
    let tokenValidity = jwt.verify(token, "Rishav")
    if(tokenValidity.userId !== id) return res.send({msg: "This user hasn't been Authorised"}) 
    next()
    }
    catch(err){
        console.log(err.message)
        res.status(500).send({status: false, msg: 'invalid token, unable to verify user. Please re-log in.'}) 
    }
}

module.exports = {authCheck}