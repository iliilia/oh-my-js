import * as readline from 'node:readline/promises'
import { stdin as input, stdout as output } from 'node:process'

export const sample = (items) => {
  return items[Math.floor(Math.random() * items.length)]
}

export const prompt = async () => {
  const rl = readline.createInterface({ input, output });
  return await rl.question('What do you think of Node.js? ');
}
