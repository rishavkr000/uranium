const { request } = require('express');
const express = require('express');

const router = express.Router();

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