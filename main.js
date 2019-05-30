var buttons = document.getElementsByTagName('button');
var display = document.getElementById('display');
var numberValues = 0

for(var i = 0; i < buttons.length; i++)
   buttons[i].addEventListener('click', function() {
  var click = this;
  if (click.dataset.input == '=') {
    display.innerHTML = ''
    rightHand = parseInt(numberValues, 10)
    operator(leftHand, action, rightHand)
    numberValues = 0;
    leftHand = 0;
    rightHand = 0;
  }else if (this.className == 'action'){
    //store the operator and erase display
    action = this.dataset.input
    updateDisplay(click)
    leftHand = parseInt(numberValues, 10)
    numberValues = 0
  }else if (this.className == 'function'){
    // do something with special buttons AC, negative, %, and =
    functionButtons(click)
  }else {updateDisplay(click)
    numberValues += this.dataset.input
  };
});

function updateDisplay(click){
  display.innerHTML += click.dataset.input;
}

function functionButtons(click){
  if (click.dataset.input == 'AC'){
    display.innerHTML = ''
    
  };
};

function add(a, b, ...args) {
  console.log(a + b);
  display.innerHTML = (a+b)
}

function subtract(a, b, ...args) {
  display.innerHTML = (a - b);
}

function multiply(a, b, ...args) {
  display.innerHTML = (a * b);
}

function division(a, b, ...args) {
  display.innerHTML = (a / b);
}

function operator(num1, oper, num2) {
  switch (oper) {
    case '+':
      add(num1, num2);
      break;
    case '-':
      subtract(num1, num2);
      break;
    case '*':
      multiply(num1, num2);
      break;
    case '/':
      divide(num1, num2);
      break;
  }
}