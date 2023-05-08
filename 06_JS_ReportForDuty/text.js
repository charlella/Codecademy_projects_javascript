/* Write a function, reportingForDuty(), that has two string parameters, rank and lastName, and returns a string in the following format: ‘rank lastName reporting for duty!’

reportingForDuty('Private', 'Fido') 
// Should return 'Private Fido reporting for duty!'

HINT : You’ll need to return a single string. You can use concatenation (string1 + " " + string2) or string interpolation (`${string1} ${string2}`) to accomplish this.*/

const reportingForDuty = (rank, lastName) => `${rank} ${lastName} reporting for duty!`

/*
// Using string concatenation:
const reportingForDuty = (rank, lastName) => rank + " " + lastName + " " + "reporting for duty!"

// As a function declaration:
function reportingForDuty(rank, lastName) {
    return `${rank} ${lastName} reporting for duty!`
}
*/