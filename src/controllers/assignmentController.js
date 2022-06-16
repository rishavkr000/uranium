const req = require("express/lib/request")
const userModel= require("../models/userModel")
const productModel= require("../models/productModel")
const orderModel = require("../models/orderModel")
const mongoose = require("mongoose")



const createUser = async function (req, res) {
    let data= req.body
    let allUsers= await userModel.create(data)
    res.send({msg: allUsers})
}

const createProduct = async function (req, res) {
    let data = req.body
    let allProducts= await productModel.create(data)
    res.send({msg: allProducts})
}

// const createOrder= async function (req, res) {
//     let data = req.body
//     let allOrders= await orderModel.create(data)
//     res.send({msg: allOrders})
// }



const createOrder = async function(req,res){
    let data = req.body
    const header = req.headers
    let userId = data.userId
    let productId = data.productId
    
    if(!(userId && productId)) return res.send({msg: "userId and productId is required."})
    
    const checkUser = await userModel.findOne({_id: userId})
    if(!checkUser) return res.send({msg : "User Not Found"})

    if(!mongoose.isValidObjectId(userId))
        return res.send({msg : "Invalid User Id"})

    const checkProduct = await productModel.findOne({_id: productId})
    if(!checkProduct) return res.send({msg : "Product Not Found"})
    
    if(!mongoose.isValidObjectId(productId))
        return res.send({msg : "Invalid Product Id"})

    let productprice = 0
    if (header.isFreeAppUser == false) {
        if(checkUser.balance < checkProduct.price){
            return res.send({data:"Insufficient balance !"})
        }
        await userModel.findOneAndUpdate({ _id: userid }, { $inc: { balance: -checkProduct.price } })
        productprice = checkProduct.price;
    }
    let orders={
        userId:userId,
        productId:productId,
        amount:productprice,
        isFreeAppUser:req.isfreeappuser
    }
    let result=await orderModel.create(orders)
    res.send({data:result})
}

module.exports.createUser= createUser
module.exports.createProduct=createProduct
module.exports.createOrder= createOrder