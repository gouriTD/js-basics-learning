'use strict';
//Use of strict makes the following js file adhere to the new standards of js.

console.log('Hello World!!!! I am there');

// Different methods of logging. use of console.log , console.table.
// Lets define different types of javascript variables and lets see how they behave.

// For defining different data types basically 3 keywords are used.
// 1) const -> holds constant value.
// 2) let -> holds value which over time variates.
// 3) var -> used previously not recommended to be used in new versions of JS. var is similar to
// let which is used to hold values which change with time.

// ****** As per recommendation we should, most of the time try to use 'const' as doing so leads to efficient
// errror handling as less use of 'let' means dealing with less entities that would change. ****************.

/*
 The main difference between var and let is:
let:
1) let has been globally accepted as the defacto variable defining keyword in ES6
2) It is block scopped which helps effective error handling.
3) let doesn't add it self to the 'window' object , hence chances of data handled by it leaking
is managed.

var:
1) var was used for declaring variables in older JS.
2) var is function scopped.
3) Once we declare a variable as var , it adds itself to the window object and hence available 
in the browser window, so data stored in it can be leaked.                                                
*/

const myname = 'Gouri Tripathi';
const obj = {
    name: 'Gouri',
    id: 1,
    gender: 'female'
}
const num = 123;
const arr = ['red','blue','green'];

//console.logging
console.log({myname},{obj},{num},{arr});

//console.table
console.table([myname]);
console.table([obj,arr,myname,num]);

