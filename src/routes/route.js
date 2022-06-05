const { request } = require('express');
const express = require('express');
const logger = require('./logger')

const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('------------------')
    console.log(req)
    console.log('------------------')
    console.log('These are the request query parameters: ', req.query)
    res.send('My first ever api!')
});

router.get('/movies', function (req, res) {
    movies = ["rang de basnasti", "the shining", "lord of the rings", "bartman begins"]
    res.send(movies)
})

router.get('/movies/:indexNumber', function (req, res) {
    const movies = ["rang de basnasti", "the shining", "lord of the rings", "bartman begins"]
    const id = req.params.indexNumber
    if(id < movies.length){
        res.send(movies[id])
    }else{
        res.send("Use a valid index")
    }
});

router.get('/films', function (req, res) {
    const arr = [ {
        'id': 1,
        'name': 'The Shining'
       }, {
        'id': 2,
        'name': 'Incendies'
       }, {
        'id': 3,
        'name': 'Rang de Basanti'
       }, {
        'id': 4,
        'name': 'Finding Nemo'
       }]

       res.send(arr)
       
});

router.get('/films/:filmId', function (req, res) {
    const arr = [ {
        'id': 1,
        'name': 'The Shining'
       }, {
        'id': 2,
        'name': 'Incendies'
       }, {
        'id': 3,
        'name': 'Rang de Basanti'
       }, {
        'id': 4,
        'name': 'Finding Nemo'
       }]
    
    let count = 0;
    let a
    for(let i = 0; i < arr.length; i++){
    if(req.params.filmId == arr[i].id) {
            a = i
            count++;
    }
} 
    if(count > 0){
        res.send(arr[a])
    } else {
        res.send("Movie not found")
    }
});

// router.get('/missingNumber', function (req, res) {
//     const arr = [1, 2, 3, 4, 5, 7, 8, 9]
//     let n = arr.length()
//     let sum = (n * (arr[0] + arr[n+1]))/2
//     let sum1 = (n * (n + 1))/2
//     let missingNumber = sum1 - sum
//     res.send(missingNumber)
// });

router.get('/missingNumber', function (req, res) {
    const numArr = [1, 2, 3, 4, 5, 7, 8, 9];
    const missing = [];
    for(let i in numArr) {
        let x = numArr[i] - numArr[i - 1];
        let diff = 1;
        while(diff < x) {
            missing.push(numArr[i - 1] + diff);
            diff++;

        }
    }
    //console.log(missing);
    res.send(missing.toString())
});

router.get('/get-missingNumber', function (req, res) {
    const numArr = [33, 34, 35, 36, 38, 39];
    const missing = [];
    for(let i in numArr) {
        let x = numArr[i] - numArr[i - 1];
        let diff = 1;
        while(diff < x) {
            missing.push(numArr[i - 1] + diff);
            diff++;

        }
    }
    //console.log(missing);
    res.send(missing.toString())
});


module.exports = router;
// adding this comment for no reason