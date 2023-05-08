//Write a function, sillySentence(), that has 3 string parameters and returns the following silly sentence with the blanks filled in by the arguments passed into the function:

const sillySentence = (adjective, verb, noun) => `I am so ${adjective} because I ${verb} coding! Time to write some more awesome ${noun}!`

/*
// With string concatenation:
const sillySentence = (adjective, verb, noun) => 'I am so ' + adjective + ' because I ' + verb +  ' coding! Time to write some more awesome ' + noun + '!'


// As a function declaration:
function sillySentence(adjective, verb, noun) {
    return `I am so ${adjective} because I ${verb} coding! Time to write some more awesome ${noun}!`
}
*/