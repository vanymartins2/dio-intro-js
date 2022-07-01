const currentNumberEl = document.getElementById('currentNumber')
const incrementBtn = document.getElementById('adicionar')
const decrementBtn = document.getElementById('subtrair')

let currentNumber = 0

const changeColor = () => {
  if (currentNumber < 0) {
    currentNumberEl.style = 'color: red;'
  } else {
    currentNumberEl.style = 'color: green;'
  }
}

incrementBtn.onclick = () => {
  currentNumber++
  currentNumberEl.innerHTML = currentNumber
  changeColor()
}

decrementBtn.onclick = () => {
  currentNumber--
  currentNumberEl.innerHTML = currentNumber
  changeColor()
}
