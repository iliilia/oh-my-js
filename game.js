import { print, sample } from './utils.js'
const words = ['car', 'cat', 'pen', 'pencil', 'open', 'close', 'dog', 'room', 'samsung', 'iphone']
const hiddenWord = sample(words.slice(0, 9))
print('#container', 'I thought of a word, guess it, please.')

const init = () => {
  const word = prompt('Enter your word.')
  const guessed = word === hiddenWord
  print('#container', guessed ? 'you win!' : 'you loose.')
}

document.addEventListener('DOMContentLoaded', init)
