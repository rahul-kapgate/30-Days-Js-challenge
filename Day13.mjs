//Activity 1
//Task 1

import { sayHello } from "./day13-moduleTwo.mjs";

sayHello();

//Task 2

import { person } from "./day13-moduleTwo.mjs";

person.info();

//Activity 2
//Task 3

import { foo, greet } from "./day13-moduleTwo.mjs";

console.log(foo);

greet("Rahul");

// Task 4

import defaultFun from "./day13-moduleTwo.mjs";

defaultFun();

//ACtivity 3
//Task 4

// const mathUtils = require('./day13-moduleTwo.mjs');

import * as mathUtils from "./day13-moduleTwo.mjs";

console.log(`Value of PI: ${mathUtils.PI}`);
console.log(`Value of E: ${mathUtils.E}`);

const sum = mathUtils.add(10, 20);
const difference = mathUtils.subtract(20, 10);

console.log(`Sum: ${sum}`);
console.log(`Difference: ${difference}`);

//Activity 4
//Task 6

// const _ = require('lodash');

// import _ from 'lodash'; // ES module syntax
// const _ = require('lodash'); // CommonJS syntax

// const chunk = require('lodash/chunk');
// const flatten = require('lodash/flatten')

import chunk from "lodash/fp/chunk.js";
import flatten from "lodash/fp/flatten.js";

const array = [1, 2, 3, 4, 5, 6];
const chunkedArray = chunk(array, 2); // [[1, 2], [3, 4], [5, 6]]
console.log(chunkedArray);

const nestedArray = [1, [2, [3, [4]], 5]];
const flattenedArray = flatten(nestedArray); // [1, 2, [3, [4]], 5]
console.log(flattenedArray);

// task 7

// Importing axios using ES module syntax
import axios from "axios";

// GET request example
axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
        console.log('Data:', response.data); // The actual data from the response
        console.log('Status:', response.status); // HTTP status code (e.g., 200)
    })
    .catch(error => {
        console.error('Error:', error.message); // Error message if the request fails
    });

//Activtiy 5
//Task 8

//Optional 

