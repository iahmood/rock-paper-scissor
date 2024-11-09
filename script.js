/*-------------------------------- Constants --------------------------------*/
const choices = ['rock', 'paper', 'scissors']
/*-------------------------------- Variables --------------------------------*/
let playerChoice
let computerChoice
let msg
/*------------------------ Cached Element References ------------------------*/
const resultDisplay = document.querySelector('#result-display')
/*-------------------------------- Functions --------------------------------*/
const getPlayerChoice = (event) => {
  playerChoice = event.target.id
}

const getComputerChoice = () => {
  const randomIndex = Math.floor(Math.random() * choices.length)
  computerChoice = choices[randomIndex]
}
const compare = () => {
  if (playerChoice === computerChoice) {
    msg = 'You tied!'
  } else if (
    (playerChoice === choices[0] && computerChoice === choices[2]) ||
    (playerChoice === choices[1] && computerChoice === choices[0]) ||
    (playerChoice === choices[2] && computerChoice === choices[1])
  ) {
    msg = 'Congrats Bular! You win!'
  } else {
    msg = 'You lost! Try Again.'
  }
}

const render = () => {
  resultDisplay.textContent = `You chose ${playerChoice}.  The computer chose ${computerChoice}. ${msg}`
}
const play = (event) => {
  getPlayerChoice(event)
  getComputerChoice()
  compare()
  render()
}

/*----------------------------- Event Listeners -----------------------------*/
choices.forEach((choice) => {
  document.querySelector(`#${choice}`).addEventListener('click', play)
})
