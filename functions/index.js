// Create one function with zero parameter having a console statement;

function noParameter(){
    console.log(" one function with zero parameter having a console statement");
}
noParameter();

//Create one function which takes two values as a parameter and print the sum of them as "Sum of 3, 4 is 7"

let sum =(a,b) => {
    console.log(`the sum of ${a} + ${b} = ${a + b}`);
}
sum(3,4);

// Create one arrow function

const arrow = () =>{
    console.log("arrow function")
}
arrow();

// Q4  "Print output: 

var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
girl ();
// the output is undefine


// Q5 Print output: 

var x = 21;
girl ();
console.log(x)
function girl() {
    console.log(x);
    var x = 20;
};

// the output is undefine AND 21


//Q6 Print output: 


var x = 21;
a();
b();
console.log(a);
a = function() {
    
   x = 20;
  console.log(x);
};
b = function() {
    
    x = 40;
   console.log(x);
};

 // OUTPUT index.js:50 Uncaught ReferenceError: a is not defined
 

 //  Write a function that accepts parameter n and returns factorial of n

 let factorial = (n) =>{
    let fact = 1;
    for(let i=2; i<=n; i++){
        if (n==0){
            fact=1;
            break;
        }
        fact *=i;
    }
    console.log("the factorial of" + n + "is:" + fact);
}
factorial(4);