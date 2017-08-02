//** time-operating functions **//

/**
 * creates an array of days for specified month with off-month-range values
 * 
 * @function
 *
*/ 
export const makeCalendar = function (date) {
	let scaffold = new Array(6).fill(new Array(7).fill(null));

    const getMonday = function getMonday(d) {
      d = new Date(d);
      const day = d.getDay(); // current day of the week
      const diff = d.getDate() - day + (day === 0 ? -6:1); // adjust when day is sunday
      return new Date(d.setDate(diff)); // creating new Date with preset monday even if from previous month
    }

    //case when first of month is month => spare week above
    if ( new Date(date.setDate(1)).getDay() === 1 ) {//date.getDate() === 1) {
      date.setDate(date.getDate() - 7);
    } else {
      date = getMonday(date);
    }

    //filling in the scaffold, gradually increasing day count
    const filledCalendar = scaffold.map(a => a.map(b => {
      b = date.getDate();
      date.setDate(date.getDate() + 1);
      return b;
    }))

    return filledCalendar;
}

/**
 * 
 *
 *
*/

export const weekOfMonth = function (date) {
	let dateCurrent = new Date(date);
	
	const firstDay = new Date(dateCurrent.setDate(1)).getDay();

	return Math.ceil((date.getDate() + firstDay)/7);
};

