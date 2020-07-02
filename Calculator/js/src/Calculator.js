// Unit Testing Operators with Jasmine

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

// Integration Testing with Jasmine


// Numbers
$(document).ready(() =>{
    $("#1").click(function() {
        calculator.display.value += '1';
    });
    $("#2").click(function() {
        calculator.display.value += '2';
    });
    $("#3").click(function() {
        calculator.display.value += '3';
    });
    $("#4").click(function() {
        calculator.display.value += '4';
    });
    $("#5").click(function() {
        calculator.display.value += '5';
    });
    $("#6").click(function() {
        calculator.display.value += '6';
    });
    $("#7").click(function() {
        calculator.display.value += '7';
    });
    $("#8").click(function() {
        calculator.display.value += '8';
    });
    $("#9").click(function() {
        calculator.display.value += '9';
    });
    $("#0").click(function() {
        calculator.display.value += '0';
    });

    //Operators

    $("#plus").click(function() {
        calculator.display.value += '+';
    });

    $("#minus").click(function() {
        calculator.display.value += '-';
    });

    $("#times").click(function() {
        calculator.display.value += '*';
    });

    $("#divide").click(function() {
        calculator.display.value += '/';
    });

    // Clear and Equal

    $("#clear").click(function() {
        calculator.display.value = '';
    });

    $("#equal").click(function() {
        calculator.display.value = eval(calculator.display.value);
    });
});










// window.onload = function() {
//     if (window.jQuery) {
//         // jQuery is loaded
//         alert("Yeah!");
//     } else {
//         // jQuery is not loaded
//         alert("Doesn't Work");
//     }
// }
