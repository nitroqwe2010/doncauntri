// // let buton1 = document.querySelector('button')
// // let buton2 = document.querySelector('.button2')
// // let span = document.querySelector ('span')
// // buton2.addEventListener( "click", () => {

// //     if ( Number (span.textContent) > 0) {
// //         span.textContent = Number (span.textContent) + 1
// //     }
// // })

// // buton1.addEventListener( "click", () => {
// //     if (Number (span.textContent) > 100) {
// //         span.textContent = Number (span.textContent) - 1  
// //     }

// // })
// let count = 0;

// const button = document.getElementById("tasbehButton");
// const countDisplay = document.getElementById("count");

// button.addEventListener("click", () => {
//     count++;  // Sonni 1 ga ko'paytirish
//     countDisplay.textContent = `Son: ${count}`;  // Sonni yangilash

//     document.body.style.backgroundColor = "yellow";  // Orqa fon sariq bo'ladi
// });

// Counter variable to store the current value
let counter = 0;

// Elements for displaying counter value and buttons
const counterValue = document.getElementById("counterValue");
const addButton = document.getElementById("addButton");
const subtractButton = document.getElementById("subtractButton");

// Update counter value on the screen
function updateCounter() {
    counterValue.textContent = counter;
}

// Add 1 to the counter
addButton.addEventListener("click", () => {
    counter++;
    updateCounter();
});

// Subtract 1 from the counter, but don't go below 0
subtractButton.addEventListener("click", () => {
    if (counter > 0) {
        counter--;
        updateCounter();
    }
});
