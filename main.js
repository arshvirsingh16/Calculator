// constants
const buttons = document.querySelectorAll(".button");
const screen = document.querySelector("#screen");
const num_buttons = document.querySelectorAll("#num_button");
const op_buttons = document.querySelectorAll("#op_button");


//global variables
let selection;
let operation;
let picked_op;
let temp_num = '';
let id;
let num_one = null;
let num_two = null;

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        selection = button.value;
        create_num(selection);
         id = button.id;
         console.log(selection);
        // console.log(selection);
        // console.log(num_one);
        screen.innerHTML = temp_num;
    })
})

// num_buttons.forEach(button => {
//     button.addEventListener("click", (e) => {
//         // selection = button.value;
//         temp_num += selection;
//         console.log(temp_num);
//         // if(picked_op == 'op_button' && getNUM == 'one'){
//         //     picked_op = null;
//         //     num_one = temp_num;
//         //     getNUM = 'two'
//         //     console.log('is '+num_one); 
//         // }

//         // if(num_one == null && picked_op == 'op_button' && getNUM == 'two'){
//         //     picked_op = null;
//         //     num_two = temp_num;
//         //     getNUM = 'one';
//         //     console.log(num_two + 'istwo');
//         // }
        
//     })
// })

// op_buttons.forEach(button => {
//     button.addEventListener("click", (e) => {
//         operation = button.value;
//         picked_op = button.id;
//     })
// })







function calc_operation(selection) {
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

function create_num(selection){
    if(selection == 'clr' || selection =='='){
        temp_num = '';
        return null;
    }
    temp_num += selection;
    screen.innerHTML = temp_num;
}

function clear_num(selection) {
    if(selection == 'clr'){
        screen.innerHTML = '';
    }
}





