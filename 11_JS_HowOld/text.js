

const howOld = (age, year) => {
    // The following two lines make it so that our function always knows the current year.
        let dateToday = new Date();
        let thisYear = dateToday.getFullYear();
    // It is totally ok if your function used the current year directly!
      
        const yearDifference = year - thisYear
        const newAge = age + yearDifference
        if (newAge > age) {
            return `You will be ${newAge} in the year ${year}`
        } else if (newAge < 0) {
            return `The year ${year} was ${-newAge} years before you were born`
        } else {
            return `You were ${newAge} in the year ${year}`
        }
    }


/* 
CONSIGNE :
Write a function, howOld(), that has two number parameters, age and year, and returns how old someone who is currently that age was (or will be) during that year. Handle three different cases:

If the year is in the future, you should return a string in the following format:

'You will be [calculated age] in the year [year passed in]'
If the year is before they were born, you should return a string in the following format:

'The year [year passed in] was [calculated number of years] years before you were born'
If the year is in the past but not before the person was born, you should return a string in the following format:

'You were [calculated age] in the year [year passed in]'
Checkpoint 2 Passed

Hint
You might find these two variables helpful:

const yearDifference = year - theCurrentYear
const newAge = age + yearDifference
Once you have newAge, you’ll be able to handle the three difference cases.

If the newAge is less than 0, this means the year provided was before the person was born. If the newAge is greater than their current age, this means the year passed in is in the future. Otherwise, we know the year provided was in the past but not before they were born.

Our solution is written as a function expression and uses string interpolation, but it would be equally acceptable to use a function declaration and/or string concatenation
*/

//Exercice 3
/* Create a Javascipt function numberDigits() that takes the variable x as its only parameter.

If the variable x is between 0 and 9, return the string 'One digit: N', where N is the value of x. For example, numberDigits(5) would return:

'One digit: 5'
If the variable x is between 10 and 99, return the string 'Two digits: N', where N is the value of x. For example, numberDigits(12) would output:

'Two digits: 12'
Any other value of x, including negative numbers, return the string 'The number is: N', where N is the value of x. For example, numberDigits(-202) would output:

'The number is: -202'*/

function numberDigits(x) {
    if (x >= 0 && x < 10) {
      return 'One digit: ' + x;
    } else if (x >= 10 && x < 100) {
      return 'Two digits: ' + x;
    } else {
      return 'The number is: ' + x;
    }
  }

  /* The function first checks if x is between 0 and 9 (inclusive). If it is, it returns the string 'One digit: N', where N is the value of x.

If x is not between 0 and 9, the function checks if it is between 10 and 99 (inclusive). If it is, it returns the string 'Two digits: N', where N is the value of x.

Finally, if x is not between 0 and 99, the function returns the string 'The number is: N', where N is the value of x. This includes negative numbers and any numbers greater than or equal to 100.*/