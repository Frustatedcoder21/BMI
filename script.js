const weight_value = document.querySelector("#w_input");
const height_value = document.querySelector("#h_input");
const submit_button = document.querySelector(".getresult");
const result = document.querySelector("#result"); // Changed from ".result" to "#result"

function input_val() {
    // Corrected BMI calculation formula
    const weight = parseFloat(weight_value.value);
    const height = parseFloat(height_value.value);
    
    // Check if weight and height are valid numbers
    if (!isNaN(weight) && !isNaN(height) && height !== 0) {
        const bmi = weight / (height * height);
        result.value = bmi.toFixed(2); // Display BMI with two decimal places
    } else {
        result.value = "Invalid input"; // Display if input is invalid
    }
}

submit_button.addEventListener('click', input_val);
