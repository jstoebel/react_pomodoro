import { Reducer } from 'redux';
import C from '../constants';

/*
  handles keeping track of which task (if any) is running a pomodoro.
  only one task can run a pomodoro at a given time
*/ 
interface actionI {
  type: String,
  payload: Number
}

const reducer: Reducer<Number> = (state=null, action: actionI) => {
  switch (action.type) {
    case C.START_POMODORO:
      // mark a task as running a pomodoro
      return action.payload
    case C.STOP_POMODORO:
      // no tasks are running a pomodoro
      return null
  }
  return state;
}

export default reducer
