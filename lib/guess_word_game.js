import { clear, print, sample } from './utils.js'

export class GuessWordGame {
  constructor() {
    this.containerSelector = '.game-block--guess-word'
    this.words = [
      'car', 'cat', 'pen', 'pencil', 'open', 'close', 'dog', 'room', 'samsung', 'iphone',
    ]
    this.hiddenWord = undefined
  }

  blockSelector = (selector) => {
    return `${this.containerSelector} ${selector}`
  }

  startNewGame = () => {
    clear(this.blockSelector('#container'))
    this.hiddenWord = sample(this.words.slice(0, 3))
  }

  startButton = () => {
    return document.querySelector(this.blockSelector('button#start-new-game'))
  }

  wordInput = () => {
    return document.querySelector(this.blockSelector('input#word'))
  }

  check = () => {
    const word = this.wordInput().value
    const guessed = word === this.hiddenWord
    print(
      this.blockSelector('#container'),
      guessed ?
        `Congratulations! You win! The word '${word}' is right` :
        `Sorry, the word '${word}' is wrong`
    )
  }

  init = () => {
    this.startNewGame()
    this.startButton().addEventListener('click', this.startNewGame)
    this.wordInput().addEventListener('change', this.check)
  }
}
