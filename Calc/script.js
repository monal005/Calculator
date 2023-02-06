
const buttons = Array.from(document.querySelectorAll("input[type='button']"));
const display = document.querySelector('#display');
let erase = document.getElementById("erase");
let operatorClicked = false;
let equalClicked = false;

buttons.map(button => {
  button.addEventListener('click', e => {
    const value = e.target.value;
    if (value === 'AC') {
      display.value = '';
      operatorClicked = false;
      equalClicked = false;
    }
    else if(value ==='DEL'){
      display.value = display.value.slice(0,-1)

    }
    else if (value === '+' || value === '-' || value === '*' || value === '/'||value==='%') {
      if (display.value.length === 0 ||
          display.value.charAt(display.value.length - 1) === '+' ||
          display.value.charAt(display.value.length - 1) === '-' ||
          display.value.charAt(display.value.length - 1) === '*' ||
          display.value.charAt(display.value.length - 1) === '/'||
          display.value.charAt(display.value.length - 1) === '%') {
        return;
      }
      display.value += value;
      operatorClicked = true;
      equalClicked = false;
    } else if (value === '=') {
      equalClicked = true;
      operatorClicked = false;
      display.value = eval(display.value);
    } else {
      if (operatorClicked || equalClicked) {
        display.value = '';
        operatorClicked = false;
        equalClicked = false;
      }
      display.value += value;
    }
  });
});
