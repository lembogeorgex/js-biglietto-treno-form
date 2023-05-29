// Console check
console.log("JS OK");


// Mod target elements
document.getElementById("nameResult")
document.getElementById("kmtsResult")
document.getElementById("ageResult")
document.getElementById("finalPrice")




// Name input
const targetName =  document.getElementById("naming");

// Kilometers input
const userKM = document.getElementById("kmts");

// Age input
const userAge =document.getElementById("age");


// MOD Result

// Event Function

const button =  document.getElementById("button");

button.addEventListener("click", function() {
  
    document.getElementById("nameResult").innerText = (targetName.value.trim())
    document.getElementById("kmtsResult").innerText = (userKM.value)
    document.getElementById("ageResult").innerText = (userAge.value)

// Discount and final price calculation
    const standardPrice = (userKM.value * 0.21)
    let discount
    let finalPrice
    if (userAge.value === "underAge") {
    discount = standardPrice * 20 / 100
    finalPrice = (standardPrice - discount)
}

    else if (userAge.value === "overAge"){
    discount = standardPrice *  40 / 100
    finalPrice = (standardPrice - discount)

}
else { 
    finalPrice = (standardPrice)

}
    document.getElementById("finalPrice").innerText = (finalPrice)

    
})




// //  Discount Calc

