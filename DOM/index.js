
const element = document.getElementById("text");
element.style.backgroundColor="red";

const element2 = document.getElementsByTagName("h1")[0];
element2.style.backgroundColor="blue";
element2.style.color="red";


const element3 = document.getElementsByClassName("box1")[0];
element3.style.fontSize="100px";
element3.style.backgroundColor="blue";

const element4 =document.getElementById("hel");
element4.innerHTML="<h1>Hello world</h1>"


function myLocal(){
    const rrr = document.getElementsByClassName("flex");
    rrr[0].style.flexDirection="column" ;
    rrr[0].style.justifyContent="space-around";
    console.log(rrr);
}

function myLocal2(){
    const hed = document.getElementById("hed");
    hed.innerHTML="<h1> Welcome to Elevation academy</h1>"

   
    console.log(hed);
}


function time(){

    let hrs = document.getElementById("hours");
    let mins = document.getElementById("minuts");
    let secs = document.getElementById("seconds");

    let computertime = new Date();

    let hrss = computertime.getHours();
    let minss = computertime.getMinutes();
    let secss = computertime.getSeconds();

    if(hrss < 10){
        hrss = "0" + hrss;
    }
    if(minss < 10){
        minss = "0" + minss;
    }
    if(secss < 10){
        secss = "0" + secss;
    }
    

    hrs.innerText = hrss;
    mins.innerText = minss;
    secs.innerText = secss;
}
let MS = 1000;
setInterval(time,MS)

function getOption() {
    selectElement = document.querySelector('#select1');
    output = selectElement.value;
    document.querySelector('.output').textContent = output;
}