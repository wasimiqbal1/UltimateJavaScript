let age1 = prompt("What is your age");
    age1 = Number.parseInt(age1)

switch(age1){
    case 12:
        console.log("Your age is 12")
        break
    case 13:
        console.log("Your age is 13")
        break
    case 14:
        console.log("Your age is 14")
        break
    case 15:
        console.log("Your age is 15")
        break
    default:
        console.log("Your age is not special")    
}

// Number is divisible by 2 & 3

let num = prompt("What is your age");
    nun = Number.parseInt(num)

if (num % 2 == 0 && num % 3 ==0 ){
    console.log("Your number is divisible by 2 & 3 ")
}
else{
    console.log("Your number is not divisible by 2 & 3 ")
}

// Use ternary Operator
let age = prompt("What is your age");
let a = age >= 18 ? "You Can drive" : "You Can't drive";
console.log(a)
