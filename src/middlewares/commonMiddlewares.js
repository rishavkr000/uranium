

const mid4= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid4")
    //counter
    next()
}


const headerValid = function (req, res, next) {
 
    let headers  = req.body.isFreeAppUser
    if(headers !== undefined){
        next()
    }else{
        res.send({msg: "The request is missing a mandatory header"})
    }
    console.log(req.body)
    next()
}

// module.exports.mid1= mid1
// module.exports.mid2= mid2
module.exports.headerValid= headerValid
module.exports.mid4= mid4
