let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

//Q1 remove the last array => .pop
let removed = secretMessage.pop();
console.log(secretMessage);
console.log(removed);

//Q2 .length
console.log(secretMessage.length)

//Q3 add the words "to" and "Program" as separate strings to the end of the secretMessage array.
secretMessage.push("to","Program");
console.log(secretMessage);

//Q4 Change the word easily to the word right by accessing the index and replacing it.
let easilyIndex = secretMessage.indexOf("easily");
console.log(easilyIndex)
secretMessage.splice(7, 1, "right");
/*7: index easily; 
1 nb of remove; 
word to add*/
console.log(secretMessage);

//Q5 Use an array method to remove the first string of the array.
let removed2 = secretMessage.shift();
console.log(secretMessage);

//Q6 Use an array method to add the string Programming to the beginning of the array.
secretMessage.unshift("Programming");
console.log(secretMessage);

//Q7 Use an array method to remove the strings get, right, the, first, time,, and replace them with the single string know,.
secretMessage.splice(6,5, "know,");
console.log(secretMessage);

//Q8 On one line, use console.log() and .join() to print the secret message as a sentence.
console.log(secretMessage.join());

//Q9 Use console.log() and .join(' ') like this. console.log(array.join(' ')); pour ajouter un espace
console.log(secretMessage.join(' '));