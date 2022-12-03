// constants
const buttons = document.querySelectorAll(".button");
const screen = document.querySelector("#screen");
const num_buttons = document.querySelectorAll("#num_button");
const op_buttons = document.querySelectorAll("#op_button");


//variables
let temp_num = '';
let num_op = null;

let numbers = {
    num_one: '',
    num_two: '',
    operator: ''
}

num_buttons.forEach(number => {
    number.addEventListener('click', create_num);
})
op_buttons.forEach(button => {
    button.addEventListener("click", update_operator)
})

function create_num(e){
    temp_num += e.target.value;
    screen.innerHTML = temp_num;
    return temp_num;
    // console.log(e.target.value);
}

function update_operator(e){
        switch (e.target.value){
            case '+' : clear_screen(), store_num(), numbers.operator = '+'; 
            case '-' : clear_screen(), store_num(), numbers.operator = '-'; 
            case 'x' : clear_screen(), store_num(), numbers.operator = 'x'; 
            case '/' : clear_screen(), store_num(), numbers.operator = '/'; 
            case '=' : clear_screen(); //calc_operation(operator); 
            default  : return;
        }
}

function clear_screen() {
        screen.innerHTML = '';
        return null;
}

function store_num(){
   if(!num_op){
    numbers.num_one = temp_num;
    console.log('num_one: '+ numbers.num_one);
   }
   if(num_op == 1){
    numbers.num_two = temp_num;
    console.log('num_two: '+ numbers.num_one);
   }
   num_op = 1;
   temp_num = '';
}

// function calc_operation(operator) {
//         switch (operator){
//             case '+' : add_func();
//             case '-' : sub_func();
//             case 'x' : mult_func();
//             case '/' : divi_func();
//             default  : return;
//         }
//     }
    
//     function add_func(num_one, num_two) {
//         let result = 0;
//         result = num_one + num_two;
//         return result;
//     }
    
//     function sub_func(num_one, num_two) {
//         let result = 0;
//         result = num_one - num_two;
//         return result;
//     }
    
//     function mult_func(num_one, num_two) {
//         let result = 0;
//         result = num_one * num_two;
//         return result;
//     }
    
//     function divi_func(num_one, num_two) {
//         let result = 0;
//         result = num_one / num_two;
//         return result;
//     }




//update number, update operator, update display, clear, operate
//equ
