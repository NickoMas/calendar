import { combineReducers } from "redux";
import { makeCalendar } from "./time-fn.js";

const initialState = {
	time: new Date()
  , calendar: null
};

//main reducer function
function monthShift (state = initialState, action) {

  const time = state.time;
  const calendar = state.calendar;

  switch (action.type) {
    case "up":
    	return { time: new Date(time.setMonth(time.getMonth() + 1)), calendar: makeCalendar(time) }
    case "down":
    	return { time: new Date(time.setMonth(time.getMonth() - 1)), calendar: makeCalendar(time) }
    default:
    	return { time, calendar: makeCalendar(time) }
  }
}

const rootReducer = combineReducers({
	monthShift
});

export default rootReducer;
