//Exercice 1 : Create a function colorMessage() that takes 2 string arguments, favoriteColor and shirtColor.
//If the value of favoriteColor is the same as the value of shirtColor return the string 'The shirt is your favorite color!'.
//If not, return the string 'That is a nice color.'

// Create function below
function colorMessage(favoriteColor, shirtColor) {
    if (favoriteColor === shirtColor) {
      return 'The shirt is your favorite color!';
    } else {
      return 'That is a nice color.';
    }
  }

  //Vérif :
console.log(colorMessage('blue', 'blue')); // Output: The shirt is your favorite color!
console.log(colorMessage('green', 'red')); // Output: That is a nice color.

//Exercice 2 : Create a function isEven() that takes a number as its only parameter. The function should return true if the number is even and false if the number is odd.

// Write function below
function isEven(num) {
    // Checks if a given number is even or odd.
    
    if (num % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

//Alternatively, you could use a ternary operator to make the code more concise:
function isEven(num) {
    // Checks if a given number is even or odd.
    
    return num % 2 === 0 ? true : false;
}

//Both implementations should work the same way. You can call the function by passing a number as an argument, and it will return true if the number is even and false if it is odd. For example:
console.log(isEven(4)); // true
console.log(isEven(5)); // false

//que signifie cette ligne de code :  if (num % 2 == 0) {
    /* Cette ligne de code vérifie si le nombre passé en paramètre (num) est divisible par 2 en utilisant l'opérateur modulo %. L'opérateur modulo renvoie le reste de la division du premier nombre par le deuxième nombre.

Dans ce cas, si le reste de la division de num par 2 est égal à 0, cela signifie que num est un nombre pair. Donc, la condition if (num % 2 == 0) renverra true si num est pair et false si num est impair.*/