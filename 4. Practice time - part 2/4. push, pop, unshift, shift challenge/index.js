let largeCountries = ["Tuvalu","India","USA","Indonesia","Monaco"]

console.log("The 5 largest countries in the world: \n")
for(let i=0; i<largeCountries.length; i++){
    console.log("- "+largeCountries[i]+"\n")
}

// You need to help me fixup the largeCountries array so that 
// China and Pakistan are added back into their respective places
console.log("After fixing \n")
// Use push() & pop() and their counterparts unshift() & shift()
// Google how to use unshift() and shift()

largeCountries.pop()
largeCountries.push("Pakistan")
largeCountries.shift()
largeCountries.unshift("China")

console.log("The 5 largest countries in the world: \n")
for(let i=0; i<largeCountries.length; i++){
    console.log("- "+largeCountries[i]+"\n")
}