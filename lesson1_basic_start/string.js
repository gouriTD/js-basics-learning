/*
Strings are one of the most important data types in JS.

1) stings can be defined as:
let newString = "abc"
OR
let newString = new String('abc') ---> Here the string created is with a Class called string.

2) There are different methods of importance with string like:
    a) toLowerCase : converts string value to entirely lowercase.
    b) toUpperCase : converts all string characters to uppercase.
    c) trim : trims /removes all white spaces in and around a string.
    d) different types of trim functions are trimLeft, trimRight, trimStart, trimEnd.
    e) substring : creates a substring out of given string.
    f) slice : this method creates a substr out of a given string, here start and end indexes are required. slice accepts negative
    index value as well.
    g) includes : returns true/false depending upon the value / char there in the string.
    h) charAt : returns a character at a given index.
    i) indexOf : returns an index of a given character.
    j) replace: takes 2 strings, first one is the value to be replaced and second is the value with which to replace the string.
    k) at()
    l) deprecated list of methods : big(), blink(),bold(),fixed(),fontcolor(),fontsize(),italics(),link(),small(),strike(),sub(),
    substr(),sup() -> THESE ARE BASICALLY HTML WRAPPER METHODS FOR WHICH WE CAN USE THE DOM SUPPORTED METHOD OF CREATEELEMENT.
    m) Other supported functions are : charAt(), charCodeAt(), codePointAt(), concat(), endsWith(), fromCharCode(), fromCodePoint(),
    includes(), indexOf(), isWellFormed(), lastIndexOf(), localeCompare(), match(), matchAll(), normalize(), padEnd(), padStart(),
    raw(), repeat(), replace(), replaceAll(), search(), slice(), split(), startsWith(), substring(), toLocaleLowerCase(),
    toLocaleUpperCase(), toLowerCase(), toString(), toUpperCase(), toWellFormed(), trim(), trimEnd(), trimStart(), valueOf()->

    The documetation for the above can be accessed from the mdn docs.
*/

// String reversal.
const myString = 'Gouri Tripathi';

function reversestring(text){
    let tempText = text;
    let reverse = '';
    const len = tempText.length;
    for(let i = len-1; i > -1;i--){
        reverse+= myString.charAt(i);
        
    }
    console.log({reverse});
        return reverse;
}
const reversedString = reversestring(myString.toString());
console.log({myString},{reversedString});