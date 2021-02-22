class Calculator {
  constructor(previousOperlandTextElement, currentOperlandTextElement) { 
  this.previousOperlandTextElement = previousOperlandTextElement
  this.currentOperlandTextElement = currentOperlandTextElement
  this.clear()
}
  clear() {
    this.currentOperland = ''
    this.previousOperland = ''
    this.operation = undefined
  }
  delete() {

  }
  appendNumber(number) {

  }
  chooseOperation(operation) {

  }
  compute() {

  }
  updateDisplay() {
    this.currentOperlandTextElement.innerText
  }
}
const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButtons = document.querySelectorAll('[data-equals]')
const deleteButtons = document.querySelectorAll('[data-delete]')
const allClearButtons = document.querySelectorAll('[data-all-clear]')
const previousOperlandTextElement = document.querySelectorAll('[data-previousOperland]')
const currentOperlandTextElement = document.querySelectorAll('[data-currentOperland]')

const calculator = new Calculator(this.previousOperlandTextElement, this.currentOperlandTextElement)

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
   calculator.appendNumber(button.innerText) 
   calculator.updateDisplay()
  })
});
