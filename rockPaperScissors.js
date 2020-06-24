const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  }
  else {
    console.log('Error!');
  }
};

const getComputerChoice = () => {
 let randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {return 'rock'}
  else if (randomNumber === 1) {return 'paper'}
  else {return 'scissors'};
};
getComputerChoice();

const determineWinner = (userChoice, computerChoice) => {
      if (userChoice === computerChoice) {
        return 'The game was a tie';
      }
      if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
          return 'The computer won!';
        }
        else { return 'You won!';
      }
      }
      if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
          return 'The computer won!';
        }
        else { return 'You won!';
      }
      }
      if (userChoice === 'scissors')
      {
        if (computerChoice === 'rock') {
          return 'The computer won!';
        }
        else { return 'You won!';
      }
      }
      if (userChoice === 'bomb') {
        return 'You won!';
      }
};
determineWinner('rock', 'paper');

const playGame = () => {
    let userChoice = getUserChoice('bomb');
    let computerChoice = getComputerChoice();
    console.log(userChoice, computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
};
playGame();


