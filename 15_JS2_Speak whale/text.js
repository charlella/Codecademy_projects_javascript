const input = 'turpentine and turtles'
const vowels = ['a', 'e', 'i', 'o', 'u'];

const resultArray = [];

for (let inputIndex = 0; inputIndex < input.length; inputIndex++) {
  // console.log("inputindex",input[inputIndex])
  //console.log('inputIndex is '+ inputIndex); 
  if (input[inputIndex] === 'e') {
    resultArray.push(input[inputIndex]);
  }
 if (input[inputIndex] === 'u') {
    resultArray.push(input[inputIndex]);
  }

  for (let vowelIndex = 0; vowelIndex < vowels.length; vowelIndex++) {
    //console.log('vowelIndex is ' + vowelIndex);
    if (input[inputIndex] === vowels[vowelIndex]) {
      //console.log(input[inputIndex]);
      resultArray.push(input[inputIndex]);
    }
  }
};

//pour vérifier 2 e et 2 i ci-dessous :
//console.log(resultArray);

//lettres capitales
const resultString = resultArray.join('').toUpperCase();
console.log(resultString);


// OUTPUT : UUEEIEEAUUEE


//CONSIGNES

/*
Whale Talk
Take a phrase like ‘turpentine and turtles’ and translate it into its “whale talk” equivalent: ‘UUEEIEEAUUEE’.

There are a few simple rules for translating text to whale language:

There are no consonants. Only vowels excluding “y”.
The u‘s and e‘s are extra long, so we must double them in our program.
Once we have converted text to the whale language, the result is sung slowly, as is a custom in the ocean.

To accomplish this translation, we can use our knowledge of loops. Let’s get started!

If you get stuck during this project or would like to see an experienced developer work through it, click “Get Unstuck“ to see a project walkthrough video.

Tasks
13/14 Complete
Mark the tasks as complete by checking them off
1.
Create a variable named input that is equal to any phrase you’d like. This variable will contain the text you want to translate into “whale talk”.


Stuck? Get a hint
2.
Whales only speak with the vowels, “a”, “e”, “i”, “o”, and “u”. Using these lowercase letters, create an array named vowels. This array will not be updated so be sure to choose the appropriate declaration keyword.

Note: The use of this array will be more apparent within the following steps.


Hint
Remember that an array can be created with square brackets, as such:

const array = ['a', 'b', 'c', '1', '2'];
3.
Create a variable named resultArray and set it equal to an empty array: []. This will serve as a place to store the vowels from the input string.


Stuck? Get a hint
4.
Create a loop to iterate through each letter of the input variable text. In a later step, we will compare each letter with our vowels array.


Hint
You can create this logic with a for loop, counting through input.length.

5.
To check your work, log the iterator numbered position inside the for loop and run your code. This should count the number of characters in your input string.

Comment out this code when you’re ready to move on.


Hint
For example, if input is 22 characters long, you should

console.log('i is '+ i);
to log this to the console:

i is 0
i is 1
.
.
.
i is 21
6.
Create a nested for loop inside of the for loop you just wrote. Make the inner loop iterate through the vowels array each time the outer loop runs.

This will enable you to check each letter of input against all the vowels elements during each iteration.


Hint
Remember, the inner for loop and outer for loop should have different iterator variables.

7.
To check your work, log the iterator number positions inside the inner for loop and run your code. You should see 0 through 4 repeatedly because vowels is 5 elements long.


Hint
For example, you should

console.log('j is '+ j);
to log this to the console:

j is 0
j is 1
j is 2
j is 3
j is 4
j is 0
j is 1
j is 2
.
.
.
8.
Inside the second for loop, write a code block that compares the input letter to every letter in the vowels array.

Note: To check that everything is working properly, log letter matches to the console.


Hint
Our goal here is to analyze the input string letter by letter to determine if any of its letters are the same as any of the letters within the vowels array.

Remember that stringName[i] works just like accessing an element within an array. That’s because JavaScript internally stores every character in a string at a numbered position.

We can use an if statement and the comparison operator, === to compare each letter in the input string to each letter in the vowels array. Use the console.log() method to test your logic.

9.
Now instead of just logging the letters, add them to the results array.

Note: To check your work use console.log() to print your resultArray. The letters you logged to the console in step 8 should be now included in your resultArray.


Hint
Remember that the .push() method can be used to add items to an array.

10.
Whales double their e‘s and the u‘s in their language.

Write an if statement that checks if each letter in the input string is equal to 'e'. If so, use the .push() method to add input[i] to the resultArray.

Note: This statement belongs before the inner for loop block inside the outer for loop. This is because you only want to perform this check once for every letter in the input.


Hint
Remember that the .push() method can be used to add items to an array.

11.
Next, you want to double the letter u.


Hint
You can mimic the code from the last step. Try re-creating the if statement, but modify it so it pushes the letter u.

12.
At the bottom of the program, log the resultArray to the console.


Hint
Remember that data can be logged to the console by using the console.log() method.

13.
Currently, resultArray outputs an array of characters. To produce proper whale language, we want to capitalize the array elements and put them together as one string.

Declare a variable resultString that joins our resultArray into a single string and capitalizes all of its letters.


Hint
Remember that the .join() method can be used to make a continuous string and that the .toUpperCase() function can be used to make a string uppercase.

14.
Run the program and sing the output out loud — you officially speak whale!

Note: To confirm, if you change the value of input to ‘turpentine and turtles’, the whale version would read: 'UUEEIEEAUUEE'.


Hint
You can also try other tests like 'Hi, Human' (to get IUUA) or 'a whale of a deal!' (to get 'AAEEOAEEA'), to confirm your results.
*/