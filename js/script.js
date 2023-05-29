// Console check
console.log("JS OK");


// Mod targeting element
document.getElementById("userName");
document.getElementById("kmts");
document.getElementById("age");



// Name check
const targetName = userName.value

// Kilometers check
const userKM = kmts.value


// Age Check
const userAge = age.value



// Event Function

const button =  document.getElementById("button");

button.addEventListener("click", function() {
    console.log(userName.value)
})