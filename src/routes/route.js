const express = require('express');
const res = require('express/lib/response');
const router = express.Router();
let players =
   [
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "swimming"
           ]
       },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": [
               "soccer"
           ]
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [
               "soccer"
           ]
       },
   ]
//     router.post('/players', function (req, res) {
//         let data = req.body;
//         players.filter(((item) => {
//             if(item.name === data.name) {
//                 return res.send({msg : "Player already exist"})
//         }}));
//         players.push(data);
//         return res.send(players);
//    });


    router.post('/players', function (req, res) {
    //LOGIC WILL COME HERE
    let data= req.body;
    console.log(data)
    for(let i in players) {
        if(data.name !== players.name){
            players.push(data)
            break
        }else{
            console.log("Player already exist")
        }
    }
    console.log(players)
    res.send(  { data: players , status: true }  )
});


const randomController= require("../controllers/randomController.js")
//write a post request to accept an element in post request body and add it to the given array and return the new array
router.post('/test-post3', randomController.addToArray ); //HANDLER/CONTROLLER



module.exports = router;
