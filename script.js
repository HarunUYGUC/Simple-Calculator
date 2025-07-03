function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = "";
}

function calculateResult() {
    const display = document.getElementById('display');
    
    try {
        const result = eval(display.value);
        display.value = result;
    } 
    catch (error) {      
        display.value = 'Error';
    } 
    finally {
        setTimeout(clearDisplay, 2000);
    }
}
