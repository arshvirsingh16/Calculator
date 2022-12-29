// constants
const num_buttons = document.querySelectorAll('[data-num]');
const op_buttons = document.querySelectorAll('[data-op]');
const del_button = document.querySelector('[data-del]');
const AC_button = document.querySelector('[data-AC]');
const equal_button = document.querySelector('[data-equal]');
const screen = document.querySelector('.screen');

let previousNumber = '';
let number = '';
let operator = '';
let computation = '';

num_buttons.forEach(button => {
    button.addEventListener('click', (e) =>{
        createNum(button.innerHTML);
        updateDisplay();
    });
})

op_buttons.forEach(button => {
    button.addEventListener('click', (e) =>{
        chooseOperator(button.innerHTML);
    });
})

AC_button.addEventListener('click', allClear);
del_button.addEventListener('click', deleteNumber);
equal_button.addEventListener('click', calculate);

function createNum(e){
    if(e === '.' && number.includes('.')) 
        return;
    number += e;
    console.log(number);
}

function updateDisplay(){
    screen.innerHTML = number;
}

function allClear(){
    screen.innerHTML = '';
    previousNumber = '';
    number = '';
}

function deleteNumber(){

}

function chooseOperator(e){
    if(previousNumber != '' && number != '')
        calculate();
    if(previousNumber != '' && e) return;

    operator = e;
    screen.innerHTML = number + e;
    previousNumber = number;
    number = '';
}

function calculate(){
    const previousValue = parseFloat(previousNumber);
    const currentValue = parseFloat(number);
    console.log('previousValue: ' + previousValue);
    console.log('currentValue: ' + currentValue)
    if(isNaN(previousValue) || isNaN(currentValue)) 
        return;
    switch(operator){
        case '+' : 
        computation = previousValue + currentValue;
        break;
        case '-' : 
        computation = previousValue - currentValue;
        break;
        case '*' : 
        computation = previousValue * currentValue;
        break;
        case '/' : computation = previousValue / currentValue;
        break;
    }
     
    screen.innerHTML = computation;
    previousNumber = computation;
    number = '';
}