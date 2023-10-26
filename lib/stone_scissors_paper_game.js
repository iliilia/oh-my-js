import { clear, print, sample } from './utils.js'

export class StoneScissorsPaperGame {
  constructor() {
    this.containerSelector = '.game-block--stone-scissors-paper'
    this.words = ['stone', 'scissors', 'paper']
  }

  blockSelector = (selector) => {
    return `${this.containerSelector} ${selector}`
  }

  startNewGame = () => {
    clear(this.blockSelector('#container'))
    this.wordInput().value = ''
    this.hiddenWord = sample(this.words)
  }

  startButton = () => {
    return document.querySelector(this.blockSelector('button#start-new-game'))
  }

  wordInput = () => {
    return document.querySelector(this.blockSelector('input#choice'))
  }

  check = () => {
    const word = this.wordInput().value
    const result = this.gameResult(this.hiddenWord, word)
    print(this.blockSelector('#container'), this.resultMessage(result))
  }

  init = () => {
    console.log('stone scissors paper game initialization.')
    this.startNewGame()
    this.startButton().addEventListener('click', this.startNewGame)
    this.wordInput().addEventListener('change', this.check)
  }

  gameResult = (computer, human) => {
    let result
    if (computer === 'stone' && human === 'stone') result = 0
    if (computer === 'stone' && human === 'scissors') result = -1
    if (computer === 'stone' && human === 'paper') result = 1
    if (computer === 'scissors' && human === 'stone') result = 1
    if (computer === 'scissors' && human === 'scissors') result = 0
    if (computer === 'scissors' && human === 'paper') result = -1
    if (computer === 'paper' && human === 'stone') result = -1
    if (computer === 'paper' && human === 'scissors') result = 1
    if (computer === 'paper' && human === 'paper') result = 0

    return result
  }

  resultMessage = (result) => {
    const messages = {
      1: 'You win!',
      0: 'Standoff. Try again.',
      '-1': 'Sorry, you lose.',
    }

    return messages[result]
  }
}
