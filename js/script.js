// Console check
console.log("JS OK");


// Mod targeting element
document.getElementById("naming");
document.getElementById("kmts");
document.getElementById("age");



// Name check
const targetName =  document.getElementById("naming");

// Kilometers check
const userKM = document.getElementById("kmts");

// Age Check
const userAge =document.getElementById("age");


// Event Function

const button =  document.getElementById("button");

button.addEventListener("click", function() {
    console.log(targetName.value)
    console.log(userKM.value)
    console.log(userAge.value)

})