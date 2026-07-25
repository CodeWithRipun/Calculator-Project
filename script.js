// ==============================
// Green Calculator
// ==============================

const display = document.getElementById("display");

// Add value to display
function append(value){
    display.value += value;
}

// Clear display
function clearDisplay(){
    display.value = "";
}

// Delete last character
function deleteLast(){
    display.value = display.value.slice(0, -1);
}

// Calculate result
function calculate(){

    try{

        if(display.value === ""){
            return;
        }

        display.value = Function('"use strict"; return (' + display.value + ')')();

    }
    catch{

        display.value = "Error";

        setTimeout(() => {
            display.value = "";
        },1000);

    }

}

// ==============================
// Keyboard Support
// ==============================

document.addEventListener("keydown", function(e){

    const key = e.key;

    // Numbers
    if("0123456789".includes(key)){
        append(key);
    }

    // Operators
    else if("+-*/.%".includes(key)){
        append(key);
    }

    // Enter = Calculate
    else if(key === "Enter"){
        e.preventDefault();
        calculate();
    }

    // Backspace
    else if(key === "Backspace"){
        deleteLast();
    }

    // Escape = Clear
    else if(key === "Escape"){
        clearDisplay();
    }

});

// ==============================
// Button Click Animation
// ==============================

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {

    button.addEventListener("click", function(){

        this.style.transform = "scale(0.95)";

        setTimeout(() => {
            this.style.transform = "scale(1)";
        },100);

    });

});