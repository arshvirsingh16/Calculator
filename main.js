// constants
const buttons = document.querySelectorAll(".button");
const screen = document.querySelector("#screen");


//variables
let selection;

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        selection = button.value;
        console.log(button.value);
        screen.innerHTML = selection;
    })
})

function operation(selection) {
    switch (selection){
        case '+' : add_func();
        case '-' : sub_func();
        case 'x' : mult_func();
        case '/' : divi_func();
        default  : return;
    }
}

function add_func(num_one, num_two) {
    let result = 0;
    result = num_one + num_two;
    return result;
}

function sub_func(num_one, num_two) {
    let result = 0;
    result = num_one - num_two;
    return result;
}

function mult_func(num_one, num_two) {
    let result = 0;
    result = num_one * num_two;
    return result;
}

function divi_func(num_one, num_two) {
    let result = 0;
    result = num_one / num_two;
    return result;
}





