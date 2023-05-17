var test = [0];
var display;
var numbers = [];
var decimal = false;

function press(element){
    if (decimal == true && element == '.'){
        return;
    }
    if (element == '.'){
        test.push(element);
        decimal = true;
    } else if (test[0] === 0 && test.length == 1) {
        test[0] = element;
    } else {
        test.push(element);
    }
    display = test.join("");
    document.querySelector("#display").innerText = display;
}

function setOP(element){
    numbers.push(display);
    numbers.push(element);
    display = undefined;
    test = [0];
    decimal = false;
}

function clr(){
    document.querySelector("#display").innerText = 0;
    numbers = [];
    test = [0];
    decimal = false;
}

function calculate() {
    numbers.push(display);
    numbers = numbers.join("");
    display = eval(numbers);
    document.querySelector("#display").innerText = display;
    numbers = [];
    test = [0];
    decimal = false;
}

// not sure how to limit the amount of numbers without breaking code