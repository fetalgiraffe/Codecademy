const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
      return userInput;
    } else {
      console.log('Invalid response.')
    }
  };
  
  const getComputerChoice = compChoice => {
    compChoice = Math.floor(Math.random() * 3);
    switch (compChoice){
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2: 
        return 'scissors';
    }
  }
  
  const determineWinner = (userChoice, compChoice) => {
    if (userChoice === compChoice){
      return 'The game is a tie!';
    }
    if (userChoice === 'rock'){
      if (compChoice === 'scissors'){
        return 'You won!'
      } else {
        return 'The computer won!'
      }
    }
    if (userChoice === 'paper'){
      if (compChoice === 'rock'){
        return 'You won!'
      } else {
        return 'The computer won!'
      }
    }
    if (userChoice === 'scissors'){
      if (compChoice === 'paper'){
        return 'You won!'
      } else {
        return 'The computer won!'
      }
    }
  }
  
  
  const playGame = () =>{
    const userChoice = getUserChoice(prompt("Choose your weapon:"));
    const computerChoice = getComputerChoice();
    console.log(`You picked ${userChoice}`);
    console.log(`The computer picked ${computerChoice}`);
    console.log(determineWinner(userChoice, computerChoice));
  }
  playGame();
  