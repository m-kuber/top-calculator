function add(a, b) 
{
    return parseInt(a) + parseInt(b);
}

function subtract(a, b)
{
    return parseInt(a) - parseInt(b);
}

function multiply(a, b)
{
    return parseInt(a) * parseInt(b);
}

function divide(a, b)
{
    return parseInt(a) / parseInt(b);
}

const result = document.querySelector("#result");
const operation = document.querySelector("#operation");

let operands = [0, 0];
let operator = '';

const zero = document.querySelector("#zero");
zero.addEventListener('click', () => {
    result.textContent += "0";
});

const plus = document.querySelector("#plus");
plus.addEventListener('click', () => {
    operator = '+';
    result.textContent += "+";
});

const one = document.querySelector("#one");
one.addEventListener('click', () => {
    result.textContent += "1";
});

const equals = document.querySelector("#equals-button");
equals.addEventListener('click', () => {
    operation.textContent = result.textContent + " ="
    result.textContent = "Hello world";
});