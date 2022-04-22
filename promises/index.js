// Write one example explaining how you can write a callback function ?
setTimeout(function() {  
   // console.log("This message is shown after 3 seconds");
}, 3000);

//"Write callback function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 

const number = () => {
    console.log("numbers ");
     setTimeout(() => {
         console.log("1")

         setTimeout(() => {
             console.log("2");
             
             setTimeout(() => {
                 console.log("3");

                 setTimeout(() => {
                     
                    console.log("4");
                    
                    setTimeout(() => {
                        console.log("5");
                        
                        setTimeout(() => {
                            console.log("6");

                            setTimeout(() => {
                                console.log("7");
                            }, 1000);
                            
                        }, 1000);
                    }, 1000);
                 }, 1000);
             }, 1000);
         }, 1000);
         
     }, 1000);
}


number();

// "Write promise function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 


let promise = new Promise((resolve,reject) =>{
    resolve();
})

promise.then(()=>{
    setTimeout(() => {
        console.log("1")
    }, 1000);
}).then(()=>{
    setTimeout(() => {
        console.log("2")
    }, 2000);
}).then(()=>{
    setTimeout(() => {
        console.log("3")
    }, 3000);
}).then(()=>{
    setTimeout(() => {
        console.log("4")
    }, 4000);
}).then(()=>{
    setTimeout(() => {
        console.log("5")
    }, 5000);
}).then(()=>{
    setTimeout(() => {
        console.log("6")
    }, 6000);
}).then(()=>{
    setTimeout(() => {
        console.log("7")
    }, 7000);
})

//Create a promise function accepting a argument, if yes is passed to the function then it should go to resolved state and print Promise Resolved, and if nothing is passed then it should go to reject state and catch the error and print Promise Rejected 

let promise1 = (arg) =>
new Promise((resolve,reject)=>{
 
    if (arg=="yes"){
        return resolve();
    }
    else{
        return reject();
    }
})


promise1("yes").then(()=>{
    console.log("Promise resolved");
}).catch(()=>{
    console.log("Promise is rejected")
});

// Create examples to explain callback function.

setTimeout(function() {  
    // console.log("This message is shown after 3 seconds");
 }, 3000);
 

 // There is a built-in method in JavaScript called “setTimeout”, which calls a function or evaluates an expression after a given period of time (in milliseconds). So here, the “message” function is being called after 3 seconds have passed. (1 second = 1000 milliseconds)
 
//Create examples to explain callback hell function
// getDataFromDatabase(id, function(dataFromDatabase) {
//     getDataFromWeatherAPI(dataFromDatabase.url, function(dataFromWeatherAPI) {
//         saveDataToDatabase(dataFromWeatherAPI, function(result) {
//             console.log("am I in hell?")
//         });
//     });
// })

//Be nesting the code in such a way, you will easily get lost, and your code will just be a gigantic mess.

//Create examples to explain promises function

let gottenData = false;
let getDataFromDatabase = () => {
    return new Promise((resolve, reject) => {
        if (gottenData) {
            resolve({ url: 'www.weatherapi/uk/london/' });
        }
        else {
            reject("Error getting data");
        }
    });
};

//

(async () => {
    try {
        let data = await getDataFromDatabase();
        console.log(data.url);
    }
    catch (error) {
        console.log(error);
    }
})
();

//
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
// expected output: Array [3, 42, "foo"]