// Example of how to find the largest number 

 
const num1 = parseFloat(prompt("Enter 1st number: "));
const num2 = parseFloat(prompt("Enter 2nd number: "));
const num3 = parseFloat(prompt("Enter 3rd number: "));
let largest;


if(num1 >= num2 && num1 >= num3) {
    largest = num1;
}
else if (num2 >= num1 && num2 >= num3) {
    largest = num2;
}
else {
    largest = num3;
}


console.log("The largest number is " + largest);
