
var currentInput = 0;
var previousInput = 0;
var operator = 0;


        function getNumber(num){
            console.log("GetNum: ",num)

            if(currentInput == 0){
                console.log("Num = 0: ",currentInput)
                currentInput = num;
            }
            else{
                console.log("Num != 0: ",currentInput)
                currentInput += num;
            }

            console.log("FinalNum: ",currentInput)
            refresh();
        }


        function clearDisplay(){
            currentInput = 0;
            previousInput = 0;
            refresh();
        }

        
        function operation(value){
            if (currentInput == 0){
                currentInput = parseFloat(document.getElementById("displayNum").value);
            }
            previousInput = parseFloat(currentInput);
            currentInput= 0;
            operator = value;
        }
        
       
        function Equals(){
            currentInput = parseFloat(currentInput);
            console.log("Operator:", operator)
            switch (operator){
                case '+':
                    currentInput = currentInput + previousInput;
                break;
                case '-':
                    currentInput = previousInput - currentInput;
                break;
                case '*':
                    currentInput = currentInput * previousInput;
                break;
                case '/':
                    currentInput = previousInput / currentInput;
                break;
            }
            refresh();
            previousInput = parseFloat(currentInput);
            currentInput = 0;
        }
        
        function refresh(){
          document.getElementById("displayNum").value = currentInput;
          console.log("Display refresh: ", currentInput)
        }

// // /*-------------------------------- Constants --------------------------------*/
// // const buttons = document.querySelectorAll('.button');
// // const display = document.querySelector('.display');
// // const num1 = document.querySelector('.number');
// // const num2 = document.querySelector('.number');

// // /*-------------------------------- Variables --------------------------------*/
// // let firstValue = null;
// // let secondValue = null;


// // /*------------------------ Cached Element References ------------------------*/
// // // const buttons = document.querySelectorAll('.button');
// // // const display = document.querySelector('.display');
// // const calculatorEl = document.querySelector('#calculator');
// // const displayEl = document.querySelector('.display');
// // /*----------------------------- Event Listeners -----------------------------*/
// // buttons.forEach((button) => {
// //     button.addEventListener('click', (event) => {
// //     });
// //   });  

// //   calculator.addEventListener('click', function(event) {
// //     console.log(event.target.innerText);
  
    
// //     if (event.target.classList.contains('number')) {
// //       console.log('clicking on a number')
// //       // displayEl.innetText += event.target.innerText
      
// //       if (firstValue === null) {
// //         displayEl.innerText = displayEl.innerText + event.target.innerText
// //       } else {
        
// //         displayEl.innerText = displayEl.innerText + event.target.innerText
// //       }
      
// //     }
// //     if (event.target.classList.contains('operator')) {
// //       console.log('operator clicked on')

// //       firstValue = displayEl.innerText

// //       console.log(firstValue, " <- firstValue")
// //       operator = event.target.innerText
// //       displayEl.innerText = ''
// //     } 
      
// //     if (event.target.clasList.contains 'equals') {
// //       secondValue = displayEl.innerText
// //       console.log(secondValue, " <- secondValue")
      
// //     }
// //   });
//
// // /*-------------------------------- Functions --------------------------------*/
// // function add(){
// //   return firstValue + secondValue
// // }




// /*-------------------------------- Constants --------------------------------*/
// const calculations = {
//   '+': () => Number(firstValue) + Number(secondValue),
//   '-': () => Number(firstValue) - Number(secondValue),
//   '/': () => Number(firstValue) / Number(secondValue),
//   '*': () => Number(firstValue) * Number(secondValue),
// }

// /*-------------------------------- Variables --------------------------------*/
// let firstValue = null;
// let secondValue = null;
// let operator = null;


// /*------------------------ Cached Element References ------------------------*/
// const calculatorEl = document.querySelector('#calculator');
// const displayEl = document.querySelector('.display');
// /*----------------------------- Event Listeners -----------------------------*/

// calculatorEl.addEventListener('click', function(e){
// 	// e is the event object
// 	// event object gives us information about the click event
// 	// e.target gives us the element we click on!
// 	console.log(e.target.innerText)


// 	if (e.target.classList.contains('number')) {
// 		// Do something with a number
// 		console.log('clicking on a number')
// 		// if firstValue is null lets store the number clicked on there
// 		// otherwise store it the secondValue
// 		if(firstValue === null){
// 			// e.target.innerText is a string, must convert to a number
		
// 			displayEl.innerText = displayEl.innerText + e.target.innerText
// 			// displayEl.innerText += e.target.innerText
// 		} else {
// 			// reset the displayEl to an empty string
			
// 			displayEl.innerText = displayEl.innerText + e.target.innerText
// 		}

// 	}

// 	if(e.target.classList.contains('operator')){
// 		console.log('operator clicked on')
// 		// Update the firstValue
// 		firstValue = displayEl.innerText
// 		console.log(firstValue, " <- firstValue")

//     if (e.target.innerText === 'C'){
//       displayEl.innerText = ''
//       firstValue = null
//       secondValue = null
//       operator = null
//     }
// 		// update the operator 
// 		// e.target.innerText will either be, '/', '-', '+', '*'
// 		operator = e.target.innerText

// 		// reset the displayEl text to get ready for the second number
// 		displayEl.innerText = ''
// 	}

// 	if(e.target.classList.contains('equals')){
// 		secondValue = displayEl.innerText
// 		console.log(secondValue, ' <- secondValue')
//     // run operation we clicked on with our first and second value
//     //and update the displayEl innerText to show the result
    
//     // ============================================================
//     // One WAY TO SOLVE using if/else
//     if (operator === '+') {
//       displayEl.innerText = add ()
//     } else if (operator === '-') {
//       displayEl.innerText = subtract ()
//     }  else if (operator === '/'){
//       displayEl.innerText = divide ()
//     } else if (operator === '*') {
//       displayEl.innerText = multiply()
//     }
//     }
//     // ============================================================
    
//     // ============================================================
//     // Another way using a switch operator!
//       displayEl.innerText = calculations[operator]() 


// 	});

//   function getResult() {
//     firstValue = Number(firstValue);
//     secondValue = Number(secondValue);
//     switch(operator) {
//       case '+':
//         return firstValue + secondValue;
//         case '-':
//           return firstValue - secondValue;
//           case '/':
//             return firstValue / secondValue;
//             case '*':
//               return firstValue * secondValue;
//     }
//   }

	

// /*-------------------------------- Functions --------------------------------*/
// function add(){
// 	return Number(firstValue) + Number(secondValue);
// }

// function subtract() {
//   return Number(firstValue) - Number(secondValue);
// }

// function divide () {
//   return Number(firstValue) / Number(secondValue);
// }

// function multiply () {
//   return Number(firstValue) * Number(secondValue);
// }


