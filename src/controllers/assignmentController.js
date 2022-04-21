const req = require("express/lib/request")
const UserModel= require("../models/userModel")
const productModel= require("../models/productModel")
const orderModel = require("../models/orderModel")



const createUser= async function (req, res) {
    let data= req.body
    let headers = req.headers
    let appType = headers["isFreeAppUser"]
    if(!appType) {
        let appType = headers["isfreeappuser"]

        
    }
    let allUsers= await UserModel.create(data)
    res.send({msg: allUsers})
}

// const createOrder= async function (req, res) {
//     let data = req.body
//     let allOrders= await orderModel.create(data)
//     res.send({msg: allOrders})
// }

const createOrder = async function(req,res){
    let data = req.body
    let userId = req.body.userId
    let productId = req.body.productId
    let header = req.headers["isfreeappuser"]
    let price = await productModel.find({productId})
    let userValidation  = await userModel.exists({userId})
    let productValidation = await productModel.exists({productId})
    if(userValidation){
        if(productValidation){
            let purchase = await orderModel.create(data)
            if(header == true){
                await userModel.find({_id : userId}).update({balance:   `${balance}-${price}`},{new:true})
            }
            res.send({success : purchase})
        } else{
            res.send({err: "the product is not present"})}
    }else{
        res.send({alert: "you are not a registered user, please register"})}
}

const createProduct= async function (req, res) {
    let data = req.body
    let allProducts= await productModel.create(data)
    res.send({msg: allProducts})
}

module.exports.createUser= createUser
module.exports.createOrder= createOrder
module.exports.createProduct=createProduct