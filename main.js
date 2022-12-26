// constants
const num_buttons = document.querySelectorAll(".num-button");

num_buttons.forEach(button => {
    button.addEventListener('click', create_num());
})



//variables
let temp_num = '';
let num_op = 0;

let numbers = {
    num_one: '',
    num_two: '',
    operator: ''
}

// num_buttons.forEach(number => {
//     number.addEventListener('click', create_num);
// })
// op_buttons.forEach(operator => {
//     operator.addEventListener("click", update_operator,{
//         capture: false
//     })
// })

function create_num(e){
  
    console.log();
    
}

// function update_operator(e){
//     e.stopPropagation();
//         switch (e.target.value){
//             case '+' : clear_screen(), store_num(), numbers.operator = '+'; 
//             case '-' : clear_screen(), store_num(), numbers.operator = '-'; 
//             case '*' : clear_screen(), store_num(), numbers.operator = '*'; 
//             case '/' : clear_screen(), store_num(), numbers.operator = '/'; 
//             case '=' : clear_screen(); //calc_operation(operator); 
//             default  : return;
//         }
// }

// function clear_screen() {
//         screen.innerHTML = '';
//         return null;
// }

// function store_num(){
//    if(num_op == 0){
//     numbers.num_one = temp_num;
//     console.log('num_one: '+ numbers.num_one);
//    }
//    if(num_op == 1){
//     numbers.num_two = temp_num;
//     console.log('num_two: '+ numbers.num_one);
//    }
//    num_op = 1;
//    temp_num = '';
// }

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
