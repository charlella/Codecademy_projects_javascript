const getSleepHours = (day) => {
    switch (day) {
      case "monday":
        return 8;
        break;
      case "tuesday":
        return 7;
        break;
      case "wednesday":
        return 8;
        break;
      case "thursday":
        return 5;
        break;
      case "friday":
        return 8;
        break;
      case "saturday":
        return 10;
        break;
      case "sunday":
        return 8;
        break;
      default:
        return "Error";
    }
  };
  
  const getActualSleepHours = () =>
    getSleepHours("monday") +
    getSleepHours("tuesday") +
    getSleepHours("wednesday") +
    getSleepHours("thursday") +
    getSleepHours("friday") +
    getSleepHours("saturday") +
    getSleepHours("sunday");
  //vérifier pk on a retiré les {} ?
  
  console.log(getSleepHours("monday")); // vérifier heures de sommeil du lundi
  
  console.log(getActualSleepHours()); // should print the sum of all sleep hours in the week
  
  const getIdealSleepHours = () => {
    let idealHours = 8;
    return idealHours * 7; //ne pas oublier les espaces !
  };
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
  
    if (actualSleepHours === idealSleepHours) {
      console.log("You've got the perfect amount of sleep!");
    } else if (actualSleepHours > idealSleepHours) {
      console.log("You've got " + (actualSleepHours - idealSleepHours) + " more hours of sleep this week!");
    } else if (actualSleepHours < idealSleepHours) {
      console.log("You should get some rest because you've slept " + (idealSleepHours - actualSleepHours) + " hours less than you should have this week.");
    }
  
    else {
      console.log("Error! Something went wrong, check your code!")
    }
  };
  
  calculateSleepDebt();
  
  console.log(getIdealSleepHours()); // if idealHours is 8, should print 56
  
  /*const getSleepHours = day => {
  Solution avec IF
      if (day === 'monday') {
      return 8;
    } else if (day === 'tuesday') {
      return 6;
    } else if (day === 'wednesday') {
      return 7;
    } else if (day === 'thursday') {
      return 7;
    } else if (day === 'friday') {
      return 6;
    } else if (day === 'saturday') {
      return 8;
    } else if (day === 'sunday') {
      return 9;       
    }*/
  