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
    return Math.round((parseInt(a) / parseInt(b)) * 100) / 100;
}

const operate = (operator, a, b) => {
    if (operator === '+')
    {
        return add(a, b);
    }
    else if (operator === '-')
    {
        return subtract(a, b);
    }
    else if (operator === '*')
    {
        return multiply(a, b);
    }
    else if (operator === '/')
    {
        return divide(a, b);
    }
    else
    {
        return "INVALID!";
    }
}

const result = document.querySelector("#result");
const operation = document.querySelector("#operation");

let num1 = 0, num2 = 0;
let operator = '';

const clear = document.querySelector("#clear");
clear.addEventListener('click', () => {
    result.textContent = "";
    num1 = 0;
    num2 = 0;
    operator = '';
});

const backspace = document.querySelector("#backspace");
backspace.addEventListener('click', () => {
    let length = result.textContent.length;
    result.textContent = result.textContent.slice(-(length), -1);
})

document.addEventListener('keydown', (event) => {
    if ((event.key >= '0' && event.key <= '9') || (['+', '-', '*', '/'].includes(event.key)))
    {
        result.textContent += `${event.key}`;
    }
});