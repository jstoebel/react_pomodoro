import axios from 'axios';
import C from './constants';
import {TaskBaseI} from './interfaces/task'
import to from './utils/to'

const jsonHeader = { headers: { 'Content-Type': 'application/json;charset=UTF-8' } }

export const fetchTasks = () => async (dispatch) => {
  const response = await axios.get('/tasks', jsonHeader)
  dispatch({
    type: C.ADD_TASKS,
    payload: response.data
  })
}

export const addTask = (taskData: TaskBaseI) => async (dispatch) => {  
  const result = await to(axios.post('/tasks', taskData))
  
  if (result.err) {
    // TODO: display an error message
    console.log('error adding task!');
  } else {
    dispatch({
      type: C.ADD_TASKS,
      payload: taskData
    })
  }
}

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