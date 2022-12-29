let age = 15

// less than 6 years old -> free
// 6 to 17 years old     -> child discount
// 18 to 26 years old    -> student discount
// 27 to 66 years old    -> full price
// over 66 years old     -> senior citizen discount

// Create a conditional statement (if/else/else if) that logs out the discount
// the passenger will get based upon the value of the age variable

var result

if(age<6){
    result = "free"
}

else if(age>=6 && age<18){
    result = "child discount"
}

else if(age>=18 && age<27){
    result = "student discount"
}

else if(age>=27 && age<67){
    result = "full price"
}

else{
    result = "senior citizen discount"
}

console.log(result)