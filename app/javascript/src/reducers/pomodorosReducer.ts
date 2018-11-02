import { Reducer } from 'redux';
import C from '../constants';
import PomodoroI from '../interfaces/pomodoro'
import * as moment from 'moment';
/*
  handles keeping track of which task (if any) is running a pomodoro.
  only one task can run a pomodoro at a given time
*/ 
interface actionI {
  type: String,
  payload?: Number
}

const reducer: Reducer<PomodoroI> = (state = { runningTask: null, doneAt: null}, action: actionI) => {
  switch (action.type) {
    case C.START_POMODORO:
      // mark a task as running a pomodoro
      return {
        runningTask: action.payload,
        doneAt: moment()
          .add(C.POMODORO_TIME.minutes, 'minutes')
          .add(C.POMODORO_TIME.seconds, 'seconds')
      }
    case C.STOP_POMODORO:
      // no tasks are running a pomodoro
      return { 
        runningTask: null,
        doneAt: null
      }
  }
  return state;
}

export default reducer
