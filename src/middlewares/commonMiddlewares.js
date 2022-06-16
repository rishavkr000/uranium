const headerValid = function (req, res, next) {
    let header = req.headers.isfreeappuser
    if(header){
        next()
    }else{
        res.send({msg: "The request is missing a mandatory header"})
    }    
}


module.exports.headerValid= headerValid
