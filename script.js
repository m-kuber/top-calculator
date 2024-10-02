function add(a, b) 
{
    return a + b;
}

function subtract(a, b)
{
    return a - b;
}

function multiply(a, b)
{
    return a * b;
}

function divide(a, b)
{
    return Math.round((a / b) * 100) / 100;
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
            return "Idiot!";
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
    operation.textContent = "";
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

const calculate = () => {
    let input = result.textContent;
    let operators = ['+', '-', '*', '/'];
    let operator, operatorIndex;

    for (let op of operators) 
    {
        if (input.includes(op)) 
        {
            operator = op;
            operatorIndex = input.indexOf(op);
            break;
        }
    }

    if (operator) 
    {
        let num1 = parseInt(input.slice(0, operatorIndex));
        let num2 = parseInt(input.slice(operatorIndex + 1));

        operation.textContent = result.textContent;

        result.textContent = operate(operator, num1, num2);
    } 
    else 
    {
        result.textContent = "Error";
    }
};

const equals = document.querySelector("#equals-button");
equals.addEventListener('click', calculate);

document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter')
    {
        calculate();
    }
});

const numbers = document.querySelectorAll(".number");
numbers.forEach((button) => {
    button.addEventListener('click', () => {
        result.textContent += button.textContent;
    })
});

const operators = document.querySelectorAll(".operator-button");
operators.forEach((button) => {
    button.addEventListener('click', () => {
        result.textContent += button.textContent;
    })
});

