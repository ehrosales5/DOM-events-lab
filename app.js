// var currentInput = 0;
// var previousInput = 0;
// var operator = 0;

// function getNumber(num) {
//   console.log("GetNum: ", num)

//   if(currentInput == 0) {
//     console.log("Num = 0: ", currentInput)
//     currentInput = num;
//   } else {
//     console.log("Num != 0: ", currentInput)
//     currentInput += num;
//   }

//   console.log("FinalNum; ", currentInput)
//   refresh();
// }

// function clearDisplay() {
//   currentInput = 0;
//   previousInput = 0;
//   refresh();
// }

// function operation(value) {
//   if (currentInput == 0){
//     currentInput = parseFloat(document.getElementById("displayNum").value);
//   }
//   previousInput = parseFloat(currentInput);
//   currentInput = 0;
//   operator = value;
// }

// function Equals() {
//   currentInput = parseFloat(currentInput);
//   console.log("Operator:", operator)
//   switch (operator){
//     case '+':
//       currentInput = currentInput + previousInput;
//       break;
//       case '-':
//         currentInput = currentInput - previousInput;
//         break;
//         case '*':
//           currentInput = currentInput * previousInput;
//           break;
//           case '/':
//             currentInput = currentInput / previousInput;
//             break;
//   }
// }

/*-------------------------------- Constants --------------------------------*/
const calculations = {
	'+': () => Number(firstValue) + Number(secondValue),
	'-': () => Number(firstValue) - Number(secondValue),
	'*': () => Number(firstValue) * Number(secondValue),
	'/': () => Number(firstValue) / Number(secondValue)
}

/*-------------------------------- Variables --------------------------------*/
let firstValue = null;
let secondValue = null;
let operator = null;

/*------------------------ Cached Element References ------------------------*/
const calculatorEl = document.querySelector("#calculator");
const displayEl = document.querySelector(".display");
/*----------------------------- Event Listeners -----------------------------*/

calculatorEl.addEventListener("click", function (e) {
  console.log(e.target.innerText);

  if (e.target.classList.contains("number")) {
    console.log("clicking on a number");
    if (firstValue === null) {

      displayEl.innerText = displayEl.innerText + e.target.innerText;
      
    } else {

      displayEl.innerText = displayEl.innerText + e.target.innerText;
    }
  }



  if (e.target.classList.contains("operator")) {
    console.log("operator clicked on");

	if(e.target.innerText === 'C'){
		displayEl.innerText = ''
		firstValue = null
		secondValue = null 
		operator = null

	}


    firstValue = displayEl.innerText;
    console.log(firstValue, " <- firstValue");

    operator = e.target.innerText;

    displayEl.innerText = "";
  }

  if (e.target.classList.contains("equals")) {
    secondValue = displayEl.innerText;
    console.log(secondValue, " <- secondValue");

  	displayEl.innerText = calculations[operator]()

  }
});

function getResult(){
	firstValue = Number(firstValue);
  	secondValue = Number(secondValue);
	switch(operator) {
		case '+':
		return firstValue + secondValue;
		case '-':
		return firstValue - secondValue;
		case '*':
		return firstValue * secondValue;
		case '/':
		return firstValue / secondValue;
	}
}






/*-------------------------------- Functions --------------------------------*/
function add() {
  return Number(firstValue) + Number(secondValue);
}

function subtract() {
  return Number(firstValue )- Number(secondValue)
}

function multiply() {
  return Number(firstValue) * Number(secondValue)
}

function divide() {
  return Number(firstValue) / Number(secondValue)
}