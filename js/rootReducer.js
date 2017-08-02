import { combineReducers } from "redux";
import { makeCalendar } from "./time-fn.js";

const initialState = {
	time: new Date()
  , calendar: null
};

function monthShift (state = initialState, action) {
  
  const time = state.time;
  const calendar = state.calendar;
  //console.log(time, calendar);

  switch (action.type) {
    case "up": 
    	return { time: new Date(time.setMonth(time.getMonth() + 1)), calendar: makeCalendar(time) }
    case "down":
    	return { time: new Date(time.setMonth(time.getMonth() - 1)), calendar: makeCalendar(time) }
    default:
    	return { time, calendar: makeCalendar(time) }
  }
}

// function calendarCreate (state = initialState, action) {console.log(state);
// 	switch (action.type) {
// 		case "make":
// 			return { calendar: makeCalendar(state.time) }
// 		default:
// 			return state
// 	}
// }

const rootReducer = combineReducers({
	monthShift
});

export default rootReducer;
