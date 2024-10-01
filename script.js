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
        if (b === 0)
        {
            return "Don't divide by zero you idiot!";
        }
        else
        {
            return divide(a, b);
        }
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

const backspace_clicked = () => {
    let length = result.textContent.length;
    result.textContent = result.textContent.slice(-(length), -1);
}

const backspace = document.querySelector("#backspace");
backspace.addEventListener('click', backspace_clicked);

document.addEventListener('keydown', (event) => {
    if (event.key === 'Backspace')
    {
        backspace_clicked();
    }
})

document.addEventListener('keydown', (event) => {
    if ((event.key >= '0' && event.key <= '9') || (['+', '-', '*', '/'].includes(event.key)))
    {
        result.textContent += `${event.key}`;
    }
});

const calculate = () =>
{
    let input = result.textContent;
    input = input.split('');
    let operatorIndex = 0;

    if (input.includes('+'))
    {
        operatorIndex = input.findIndex((item) => item === '+');
        num1 = input.slice(0, operatorIndex);
        num1 = parseInt(num1.join(''));
        num2 = input.slice(operatorIndex + 1);
        num2 = parseInt(num2.join(''));

        operation.textContent = result.textContent;
        result.textContent = operate('+', num1, num2);
    }
    else if (input.includes('-'))
    {
        operatorIndex = input.findIndex((item) => item === '-');
        num1 = input.slice(0, operatorIndex);
        num1 = parseInt(num1.join(''));
        num2 = input.slice(operatorIndex + 1);
        num2 = parseInt(num2.join(''));

        operation.textContent = result.textContent;
        result.textContent = operate('-', num1, num2);
    }
    else if (input.includes('*'))
    {
        operatorIndex = input.findIndex((item) => item === '*');
        num1 = input.slice(0, operatorIndex);
        num1 = parseInt(num1.join(''));
        num2 = input.slice(operatorIndex + 1);
        num2 = parseInt(num2.join(''));

        operation.textContent = result.textContent;
        result.textContent = operate('*', num1, num2);
    }
    else if (input.includes('/'))
    {
        operatorIndex = input.findIndex((item) => item === '/');
        num1 = input.slice(0, operatorIndex);
        num1 = parseInt(num1.join(''));
        num2 = input.slice(operatorIndex + 1);
        num2 = parseInt(num2.join(''));

        operation.textContent = result.textContent;
        result.textContent = operate('/', num1, num2);
    }

}

const equals = document.querySelector("#equals-button");
equals.addEventListener('click', calculate);

document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter')
    {
        calculate();
    }
})

