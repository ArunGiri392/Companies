function add(a,b){
    return a + b;
}
console.log(add(3,4));

//arrow function
//remove the function keyword and keep it in some variable 
//because we need a name right?

let sum2 = (a,b)=>{
    return a + b
}
console.log(sum2(5,9));

//even to simplify
//if there is only a single statemen then,

let sum3 = (a,b) => a + b;
//whatever comes after the arrow, everything will be returned automatically.
console.log(sum3(15,15));




//second case - when there is a parameter.
function ispositive(number){
    return number >= 0;
}
console.log(ispositive(5));

//with arrow function.
ispositive1 = (number)=>{
    return number >= 0;
}
console.log(ispositive1(-1));

//or , in this way.
ispositive2 = (number)=> number >= 0;
console.log(ispositive2(8));

//if we  just have one parameter, brackets are not needed.
ispositive3 = number => number >= 0;
console.log(ispositive3(77));


//onclick function is where arrow functions are so powerful on anonymous function.

document.addEventListener('click',function(){
    console.log('click');
})

//using an arrow function.
document.addEventListener('click', ()=>{
    console.log("click");
})

//or -- same as line 48 and line 52.
document.addEventListener('click',()=> console.log('click'));
 