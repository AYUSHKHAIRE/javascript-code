console.log('this is linked file\n');
let name = "Ayush";
let name1 = "Pavan";
let name2 = "ram";
let name3 = "prakash";
let name4 = "anuj";
let greettext = "Good morning";
console.log(name + " is a good boy");
console.log(name1 + " is a good boy");
console.log(name2 + " is a good boy");
console.log(name3 + " is a good boy");
console.log(name4 + " is a good boy");
// instad of this we can do 
function greet(name, greettext) {
    console.log(name + " " + greettext);
}
// calling the function 
greet(name, greettext);
greet(name1, greettext);
greet(name2, greettext);
greet(name3, greettext);
greet(name4, greettext);
// return understanding 
function sum(a, b, c) {
    let d = a + b + c;
    return d;
    comsole.log //cant return never exitute
}
let retval = sum(1, 2, 3);
console.log(retval);
// homework quick quiz
function comprator(n1, n2) {
    if (n1 > n2) {
        console.log("maximum no " + n2);
    }
    else {
        console.log("maximum no " + n1);
    }
}
comprator(12, 34);