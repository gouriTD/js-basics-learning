/*
    There are 7 different primitive types:
    1) string, 2) number(floating and integers)(for int range: 2 ** 53), 3)boolean, 4)bigInt(holds higher integer values) , 
    5) undefined, 6)null, 7)symbol (used to provide uniqueness to a value, majorly used in react)
    
    These primitive data types are always follow call by value,or give a copy of their value when asked for.
    
    There are 3 different types of non-primitive, or reference data types.
    1)arrays, 2) object, 3) functions.
    
    ** The primitive data types are always placed on the STACK area of the memory.

    ** Whereas the non primitive data types are placed on the HEAP area of the memory.

    # hence whenever the primitive data types are called the value they pass to a function or assigned
    to another variable it is the copy of the value they hold , hence if different varaible accessing
    the value changes it does not effect the original copy of the value.

    # on the other hand , when the non primitive data types are passed to a variable or a function ,
    it is the actual reference that gets passed, hence any change to the referenced copy will lead to change 
    in the eaxct copy as well.
    
    # variables as such whether primitive or non-primitive would always go on the stack, whereas their values
    if its primitive data type would go on STACK, and on the other hand if its non primitive , value would be stored in HEAP. 
    
*/

const newString = "Hello"
const newNum = 123;

let otherString = newString;

console.table([newString,otherString]);

otherString = newString + newNum;
console.table([newString,otherString]);

let bigNum = 2321321355218372153213698n;
/*
There is a separata keyword in JS which could be used to get the typeof a particular data value that is 'typeof' keyword.
*/
console.log('**************** PRMITIVE DATATYPES ***************');
console.table([
        typeof newString,
        typeof otherString, 
        typeof newNum, 
        typeof false, 
        typeof undefined, 
        typeof null, 
        typeof Symbol,
        typeof bigNum
    ]);


console.log('**************** NON PRMITIVE DATATYPES ***************');
const arr1 = ['1','2','3'];
const employee = {
    name: 'Hari',
    age: 23,
    gender: 'male'
}
const doSomething = function(){
    console.log('say hello')
}

function doSomeOtherThing(){
    console.log('say new hi')
}

console.table([
        typeof arr1,
        typeof employee, 
        typeof doSomething, 
        typeof doSomeOtherThing, 
    ]);