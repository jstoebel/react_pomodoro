import { Reducer } from 'redux';
import { TaskBaseI } from '../interfaces/task'
import C from '../constants';

const initialState: TaskBaseI[] = []

interface actionI {
  type: String,
  payload: TaskBaseI
}
const reducer: Reducer<TaskBaseI[]> = (state=initialState, action: actionI) => {
  switch (action.type) {
    case C.ADD_TASKS:
      return state.concat(action.payload)
  }
  return state;
}

export default reducer