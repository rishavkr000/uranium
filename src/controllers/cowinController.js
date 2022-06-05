let axios = require("axios")


let getByDistrictId = async function (req, res){
    try {
        let id = req.query.findByDistrict
        let date = req.query.date
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${id}&date=${date}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({msg: data, status: true})
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let weatherReport = async function (req, res) {
    try{
        let city = req.query.q
        let id = req.query.appid
        let options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${id}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data.main.temp
        res.status(200).send({Temp: data})
    }
    catch(err){
        console.log(err)
        res.status(500).send({msg: err.message})
    }
}

let sortTemperature = async function (req, res) {
    try{   
        let city = ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let sortArr = []

        for(i = 0; i < city.length; i++){
            let obj = {city: city[i]}
            let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city[i]}&appid=f8b09531103eb900b2481412985f5b13`)
            console.log(resp.data.main.temp)

            obj.temp = resp.data.main.temp
            sortArr.push(obj)
        }
        let sorted = sortArr.sort( function(a,b) { return a.temp - b.temp })
        
        console.log(sorted)
        res.status(200).send({msg: sorted})
    }
    catch(err){
        console.log(err)
        res.status(500).send({msg: err.message})
    }
}

let memesCreater = async function (req, res) {
    try{
        let id = req.query.template_id
        let text0 = req.query.text0
        let text1 = req.query.text1
        let username = req.query.username
        let password = req.query.password
        let options = {
            method: "post",
            url: `https://api.imgflip.com/caption_image?template_id=${id}&text0=${text0}&text1=${text1}&username=${username}&password=${password}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({msg: data})
    }
    catch(err){
        console.log(err)
        res.status(500).send({msg: err.message})
    }
}


module.exports.getByDistrictId= getByDistrictId
module.exports.weatherReport= weatherReport
module.exports.sortTemperature= sortTemperature
module.exports.memesCreater= memesCreater