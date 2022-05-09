// let welcomeEl=document.getElementById("welcome-El").innerText

// let name = "Nancvida"
// let greeting = "Hi,welcome back home"
// myGreeting = name + greeting
// console.log(myGreeting)

// let errorParagraph = document.getElementById("error")
// console.log(errorParagraph)

// function purchase() {
//     console.log("button clicked")
//     errorParagraph.textContent = "something went wrong,please try again"
// }

// create a basic calculator
let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("mun2-el").textContent = num2

let sulEl=document.getElementById("sum-el")
function add() {
    let result = num1+num2
    sumEl.textContent= "sum:" + result
}
function subtract() {
    let result = num1-num2
    sumEl.textContent ="sum:" + result // turn to string
}
function multiply() {
    let result =num1*num2
    sumEl.textContent="sum" + result
}
function divide() {
    let result=num1+num2
    sumEl.textContent ="sum" + result
}


     //Assignment

     