import { clear, print, sample } from './utils.js'
const words = ['car', 'cat', 'pen', 'pencil', 'open', 'close', 'dog', 'room', 'samsung', 'iphone']
let hiddenWord

const startNewGame = () => {
  clear('.game-block--guess-word #container')
  hiddenWord = sample(words.slice(0, 3))
}

const startButton = () => {
  return document.querySelector('.game-block--guess-word button#start-new-game')
}

const wordInput = () => {
  return document.querySelector('.game-block--guess-word input#word')
}

const check = () => {
  const word = wordInput().value
  const guessed = word === hiddenWord
  print(
    '.game-block--guess-word #container',
    guessed ?
      `Congratulations! You win! The word '${word}' is right` :
      `Sorry, the word '${word}' is wrong`
  )
}

const init = () => {
  startNewGame()
  startButton().addEventListener('click', startNewGame)
  wordInput().addEventListener('change', check)
}

document.addEventListener('DOMContentLoaded', init)
