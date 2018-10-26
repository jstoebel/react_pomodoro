import {combineReducers} from 'redux';
import tasksReducer from './tasksReducer';
import pomodorosReducer from './pomodorosReducer'

const rootReducer = combineReducers({
  tasks: tasksReducer,
  pomodoros: pomodorosReducer,
});

export default rootReducer;
