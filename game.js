import { sample } from './utils.js'

const words = ['car', 'cat', 'pen', 'pencil', 'open', 'close','dog', 'room', 'samsung', 'iphone']
const hiddenWord = sample(words.slice(0, 9))

const init = () => {
  // console.log('I thought of a word, guess it, please.')

  const word = prompt('Enter your word.')
  const guessed = word == hiddenWord
  console.log(guessed ? 'you win!' : 'you loose.')
}

document.addEventListener('DOMContentLoaded', init)
