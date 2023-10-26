import { GuessWordGame } from './lib/guess_word_game.js'
import { StoneScissorsPaperGame } from './lib/stone_scissors_paper_game.js'

const start = () => {
  document.addEventListener('DOMContentLoaded', new GuessWordGame().init)
  document.addEventListener('DOMContentLoaded', new StoneScissorsPaperGame().init)
}

start()
