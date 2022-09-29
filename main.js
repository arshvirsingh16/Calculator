// constants
const buttons = document.querySelectorAll("button");


//variables
let selection;

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        selection = button.value;
        console.log(button.value);
    })
})

