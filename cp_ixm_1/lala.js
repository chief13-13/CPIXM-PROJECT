//data types in javscript
//number
let length = 16; //int
let weight = 7.5; //float
console.log(length);
document.write(length); //output: 16

//strings
let color = "yellow";
let lastname = "johnson";

//alert("color : " + color + "" + lastname); //output: yellow johnson

//booleans
let x = true;
let y = false; 

//objects
const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

//array object
const cars = ["Saab", "Volvo", "BMW"];

//date object
function datesample(){
const date = new Date("2023-10-01");
document.getElementById("demo").innerHTML = date; //output: 2023-10-01T00:00:00.000Z
}

//function (a) functions without parameter and return value
function add(){
    let a = 5;
    let b = 10;
    let c = a + b;
    document.getElementById("demo2").innerHTML = c;
}

//function (a) functions without parameter with return value
function sub(){
    let a = 5;
    let b = 10;
    let c = a - b;
    return c;
}
function displaysub(){
document.getElementById("demo3").innerHTML = sub();
}

//function (a) functions with parameter and return value
function mul(a, b){
    let c = a * b;
    return c;
}
function displaymul(){
    document.getElementById("demo4").innerHTML = mul();
}

//function (a) functions with parameter and without return value
function div(a, b){
    let c = a / b;
   ans = document.getElementById("demo5").innerHTML = c;
}
function displaydiv(){

div(20,5);
}
   
