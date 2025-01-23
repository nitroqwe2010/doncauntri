// // Counter variable to store the current value
// let counter = 0;

// // Elements for displaying counter value and buttons
// const counterValue = document.getElementById("counterValue");
// const addButton = document.getElementById("addButton");
// const subtractButton = document.getElementById("subtractButton");

// // Update counter value on the screen
// function updateCounter() {
//     counterValue.textContent = counter;

//     // Agar counter 100ga yetgan bo'lsa, tugmalar faollashmasligi kerak
//     if (counter >= 100) {
//         addButton.disabled = true; // "Add" tugmasi faollashadi
//     } else {
//         addButton.disabled = false; // "Add" tugmasi faollashadi
//     }

//     // Agar counter 0ga yetgan bo'lsa, "Subtract" tugmasi faollashmasligi kerak
//     if (counter <= 0) {
//         subtractButton.disabled = true; // "Subtract" tugmasi faollashadi
//     } else {
//         subtractButton.disabled = false; // "Subtract" tugmasi faollashadi
//     }
// }

// // Add 1 to the counter
// addButton.addEventListener("click", () => {
//     if (counter < 100) { // Faqat counter 100dan kichik bo'lsa qo'shish mumkin
//         counter++;
//     }
//     updateCounter();
// });

// // Subtract 1 from the counter
// subtractButton.addEventListener("click", () => {
//     if (counter > 0) { // Faqat counter 0dan katta bo'lsa ayirish mumkin
//         counter--;
//     }
//     updateCounter();
// });

// // Initial counter value update
// updateCounter();
    // Counter variable to store the current value
let counter = 0;

// Elements for displaying counter value and buttons
const counterValue = document.getElementById("counterValue");
const addButton = document.getElementById("addButton");
const subtractButton = document.getElementById("subtractButton");

// Update counter value on the screen
function updateCounter() {
    counterValue.textContent = counter;

    // Agar counter 100ga yetgan bo'lsa, tugmalar faollashmasligi kerak
    if (counter >= 100) {
        addButton.disabled = false; // "Add" tugmasi faollashadi
    } else {
        addButton.disabled = false; // "Add" tugmasi faollashadi
    }

    // Agar counter 0ga yetgan bo'lsa, "Subtract" tugmasi faollashmasligi kerak
    if (counter <= 0) {
        subtractButton.disabled = false; // "Subtract" tugmasi faollashadi
    } else {
        subtractButton.disabled = false; // "Subtract" tugmasi faollashadi
    }
}

// Add 1 to the counter
addButton.addEventListener("click", () => {
    if (counter < 100) { // Faqat counter 100dan kichik bo'lsa qo'shish mumkin
        counter++;
    }
    updateCounter();
});

// Subtract 1 from the counter
subtractButton.addEventListener("click", () => {
    if (counter > 0) { // Faqat counter 0dan katta bo'lsa ayirish mumkin
        counter--;
    }
    updateCounter();
});

// Initial counter value update
updateCounter();
