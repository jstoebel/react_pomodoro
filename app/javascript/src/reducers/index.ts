import {combineReducers} from 'redux';
import tasksReducer from './tasksReducer';
import pomodorosReducer from './pomodorosReducer'
import notificationsReducer from './notificationsReducer'

const rootReducer = combineReducers({
  tasks: tasksReducer,
  pomodoros: pomodorosReducer,
  notifications: notificationsReducer,
});

export default rootReducer;
