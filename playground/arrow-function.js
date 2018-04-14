var square = (x) => {
    var result = x * x;
    return result;
};

var square2 = (x) => x * x;

var square3 = x => x * x;

console.log(square(9));
console.log(square2(4));
console.log(square3(6));

/** use of this keyword  */
// Arrow functions do NOT bind this keyword (i.e to its containing instance) - 
// 'this' would point to global 'this' variable for arrow functions

// ES6 offers an alternative syntax if we want to use this in an arrow function inside an object
// just as <function-name> <space> () {<body>}
// note that the function keyword is not required - even though this is now a regular function

var user = {
    name: 'Arun',
    sayHi: () => {
        console.log(`Hi I'm ${this.name}`)
    },
    sayHi2 () {
        console.log(`Hi I'm ${this.name}`)
    }
};

user.sayHi(); // prints "Hi, I'm undefined"
user.sayHi2(); // prints "Hi, I'm Arun"



/** 'arguments' array bind (i.e an array like object)*/
var user2 = {
    name: 'Arun',
    sayHi: () => {
        console.log(arguments)
    },
    sayHi2 ()  {
        console.log(arguments)
    }
};

user2.sayHi(1,2,3); // prints global arguments array
user2.sayHi2(1,2,3); // prints the function's arguments array i.e "{ '0': 1, '1': 2, '2': 3 }"