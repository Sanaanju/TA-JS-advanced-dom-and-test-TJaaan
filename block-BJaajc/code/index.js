
// 1. Write a function named `getFullName` that accepts two input `firstName` and `lastName` and return the `fullName`
function getFullName(firstName,lastName){
    return `${firstName} ${lastName}`;
}

// 2. Write a function named `isPalindrome` that accepts one input returns `true` or `false` based on wether the value passed is palindrome or not.
function isPalindrome(str){
    let reversedStr=((str.split('')).reverse()).join("");
    return str===reversedStr;
}
// 3. Create 2 functions that calculate properties of a circle, using the definitions here.
const PI=3.14;

// - Create a function called `getCircumference`:
function getCircumference(radius){

    return `The circumference is ${Math.floor(2*Math.PI*radius)}`

}
// Pass the radius of a circle to the function and it returns the circumference based on the radius, and output `The circumference is NN`.

// - Create a function called `getArea`:
function getArea(radius){
    let area  = Math.floor(Math.PI*radius*radius);
    return `The area is ${area}`;
}

// Pass the radius to the function and it returns the area based on the radius, and output `The area is NN`.

module.exports={getFullName,isPalindrome,getCircumference,getArea,}
