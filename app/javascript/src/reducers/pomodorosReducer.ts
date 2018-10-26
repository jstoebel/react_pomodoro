import { Reducer } from 'redux';
import C from '../constants';

/*
  handles keeping track of which task (if any) is running a pomodoro.
  only one task can run a pomodoro at a given time
*/ 
interface actionI {
  type: String,
  payload?: Number
}

interface ReducerI {
  runningTask: Number
}

const reducer: Reducer<ReducerI> = (state={runningTask: null}, action: actionI) => {
  switch (action.type) {
    case C.START_POMODORO:
      // mark a task as running a pomodoro
      return {runningTask: action.payload}
    case C.STOP_POMODORO:
      // no tasks are running a pomodoro
      return { runningTask: null }
  }
  return state;
}

export default reducer
