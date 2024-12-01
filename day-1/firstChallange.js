"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 68298   57474
var fs = require("fs");
var historianLocations = '';
fs.readFile('./day-1/data.txt', function (err, data) {
    if (err)
        throw err;
    historianLocations = data.toString();
    var arr1 = [];
    var arr2 = [];
    var finalArray = [];
    var separateLines = historianLocations.split("\r\n");
    separateLines.forEach(function (line) {
        var nums = line.split('   ');
        arr1.push(Number(nums[0]));
        arr2.push(Number(nums[1]));
    });
    arr1.sort(function (a, b) {
        return a - b;
    });
    arr2.sort(function (a, b) {
        return a - b;
    });
    for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] > arr2[i]) {
            var difference = arr1[i] - arr2[i];
            finalArray.push(difference);
        }
        else if (arr2[i] > arr1[i]) {
            var difference = arr2[i] - arr1[i];
            finalArray.push(difference);
        }
        else {
            finalArray.push(0);
        }
    }
    var finalResult = 0;
    finalArray.forEach(function (element) {
        finalResult = finalResult + element;
    });
    console.log(finalResult);
});
// 1. parse lokacji do dwóch tablic
// a) podzielenie inputu na linie: done
// b) wykonanie operacji na każdej linii, przypisując
// pierwszą liczbę do 1 arr i drugą liczbę do 2 arr
// c)
// 2. segregacja tablic od małych do dużych
// 3. item[1] porównać z item[1]  z dwóch list
