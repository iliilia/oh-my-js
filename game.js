import { prompt, sample } from './utils.js'

const words = ['car', 'cat', 'pen', 'pencil', 'open', 'close','dog', 'room', 'samsung', 'iphone']
const hiddenWord = sample(words)
// console.log(`hiddenWord: ${hiddenWord}`)
console.log('I thought of a word, guess it.')
let input = await prompt('What is your word?')
