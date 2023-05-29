// Console check
console.log("JS OK");





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
    document.getElementById("nameResult").trim()
    document.getElementById("nameResult").innerText = (targetName.value)

    document.getElementById("kmtsResult").trim()
    document.getElementById("kmtsResult").innerText = (userKM.value)


    document.getElementById("ageResult").trim()
    document.getElementById("ageResult").innerText = (userAge.value)

})

// ! VALIDATION
