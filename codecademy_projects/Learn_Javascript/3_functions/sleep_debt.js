  // TODO: The final function is still returning 'undefined', not sure why - scope issue?  

const getSleepHours = day => {
    switch (day) {
      case 'monday':
        return 7;
        break;
      case 'tuesday':
      case 'wednesday':
      case 'thursday':
      case 'friday': 
        return 8;
        break;
      case 'saturday':
      case 'sunday':
        return 9;
        break;
    }
  }
  
  //console.log(getSleepHours('sunday'))
  
  const getActualSleepHours = () => {
    getSleepHours('monday') +
    getSleepHours('tuesday') +
    getSleepHours('wednesday') +
    getSleepHours('thursday') +
    getSleepHours('friday') +
    getSleepHours('saturday') +
    getSleepHours('sunday');
  }
  
  const getIdealSleepHours = () => {
    const idealHours = 8; 
    return idealHours * 7;
  }
  
  // console.log(getActualSleepHours()); 
  // console.log(getIdealSleepHours()); 
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours(); 
    const idealSleepHours = getIdealSleepHours(); 
        if (actualSleepHours === idealSleepHours) {
            console.log('You got the perfect amount of sleep!')
        } else if (actualSleepHours > idealSleepHours) {
            console.log('You got ' + (idealSleepHours - actualSleepHours) + 'hour(s) more sleep than you needed this week. Nice!')
        } else if (actualSleepHours < idealSleepHours) {
            console.log('You got ' + (idealSleepHours - actualSleepHours) + 'hour(s) less sleep than you needed this week. Get some rest!')
        }; 
    }
  
  // returning 'undefined' 
  console.log(calculateSleepDebt());  

