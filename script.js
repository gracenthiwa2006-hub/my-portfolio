const fromBase = document.getElementById("fromBase");
const toBase = document.getElementById("toBase");
const numberInput = document.getElementById("numberInput");
const convertBtn = document.getElementById("convertBtn");
const output = document.getElementById("output");

convertBtn.addEventListener("click", function (){
    const text = numberInput.value.trim();
    const from = parseInt(fromBase.value);
    const to = parseInt(toBase.value);

    if (text === "") {
        output.textContent = "Please enter a number.";
        return;
    }

    const decimal = parseInt(text, from);
    if (isNaN(decimal)) {
        output.textContent = "Invalid number for the chosen system.";

     return;   
    }

    output.textContent = decimal.toString(to).toUpperCase();
});