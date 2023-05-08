console.log("hi");

const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === "bomb"
  ) {
    return userInput;
  } else {
    console.log("Error, please type rock, paper or scissors");
  }
};

/*TEST Q4
console.log(getUserChoice('paper'));
console.log(getUserChoice('milk'));
*/
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
};

/* Q5 Pour trouver ET afficher un nombre entre 0 et 2 :
const getComputerChoice = () => {
  console.log(Math.floor(Math.random() * 3))
};
  console.log(getComputerChoice); pour afficher

Etape 1 : Math.random()*3 ; Math.random permet de trouver un chiffre entre 0 et 1 ; puis on multiplie par 3
Etape 2; la valeur maximale peut etre 2,99, alors que nous souhaitons entre 0 et 2; on utilise Math.floor pour arrondir au nb entier inférieur (donc 2 max)*/

/* Q6 
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice()); */


/*7 1er if égalité*/
/*8 2e if*/
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "This game is a tie!";
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
    return "Sorry, computer won!";
  } else { 
    return "Congratulations, you won!";
  }
  }
/*Q9 paper*/
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
    return "Sorry, computer won!";
  } else { 
    return "Congratulations, you won!";
  }
  }
/*Q10 scissors*/
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
    return "Sorry, computer won!";
  } else { 
    return "Congratulations, you won!";
  }
  }

/*Q14 bomb*/
  if (userChoice === 'bomb') {
    return "Congratulations, you won!";
  }

};
/*Q11 test
console.log(determineWinner('rock', 'scissors'));
console.log(determineWinner('paper', 'scissors'));
console.log(determineWinner('rock', 'rock'));
*/
/*Q12*/
const playGame = () => {
  const userChoice = getUserChoice ('bomb');
  const computerChoice = getComputerChoice ();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw: ' + computerChoice);

/*Q13 suite const playGame*/
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();

