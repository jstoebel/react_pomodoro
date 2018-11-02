import * as moment from 'moment';

export default interface PomodoroI {
  runningTask: Number,
  doneAt: moment.Moment
}