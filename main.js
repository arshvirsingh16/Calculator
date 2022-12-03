// constants
const buttons = document.querySelectorAll(".button");
const screen = document.querySelector("#screen");
const num_buttons = document.querySelectorAll("#num_button");
const op_buttons = document.querySelectorAll("#op_button");
const num_array = [];

//global variables
let selection;
let operation;
let picked_op;
let temp_num = '';
let id;
let num_one = null;
let num_two = null;
let once = 0;
let i = 0;
let numbers = {
    num_one: '',
    num_two: ''

}


buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        selection = button.value;
        id = button.id;
        create_num(selection);
        store_num(temp_num, id);
        clear_num(id);
        if(!num_one && !num_two && once == 1){
            calc_operation();
        }
         console.log(selection);
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

op_buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        operation = button.value;
        // store_num(temp_num);
        // console.log(operation);
    })
})



function create_num(){
    temp_num += selection;
    screen.innerHTML = temp_num;
}

function clear_num() {
    if (id == 'op_button'){
        temp_num = '';
        screen.innerHTML = temp_num;
        return null;
    }
}

function store_num(){
   if(id == 'op_button'){
    numbers.num_one = `${temp_num}`;
    console.log('is'+ numbers.num_one);
   }
}

function calc_operation() {
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





