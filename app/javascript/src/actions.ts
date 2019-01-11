import C from './constants';

export const startPomodoro = (taskId: Number) => {
  return({
    type: C.START_POMODORO,
    payload: taskId,
  })
}

export const stopPomodoro = () => {
  return ({
    type: C.STOP_POMODORO,
    payload: null,
  })
}