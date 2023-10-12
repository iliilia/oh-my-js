import { clear, print, sample } from './utils.js'
const words = ['car', 'cat', 'pen', 'pencil', 'open', 'close', 'dog', 'room', 'samsung', 'iphone']
let hiddenWord

const startNewGame = () => {
  clear('#container')
  hiddenWord = sample(words.slice(0, 3))
}

const startButton = () => {
  return document.querySelector('button#start-new-game')
}

const wordInput = () => {
  return document.querySelector('input#word')
}

const check = () => {
  const word = wordInput().value
  const guessed = word === hiddenWord
  print('#container', guessed ? `${word} you win[$_$]` : `${word} you loose[x_x]`)
}

const init = () => {
  startNewGame()
  startButton().addEventListener('click', startNewGame)
  wordInput().addEventListener('change', check)
}

document.addEventListener('DOMContentLoaded', init)
