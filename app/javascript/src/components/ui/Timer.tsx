import * as React from 'react'
import * as moment from 'moment';
import Typography from '@material-ui/core/Typography';
import { toast } from 'react-toastify';
import ToastWrapper from './ToastWrapper';
import createPomodoro from '../../services/createPomodoro';
const pomodoroDone = require('../../media/pomodoroDone.mp3')

interface TimerProps {
  minutes: Number,
  seconds: Number,
  onStopPomodoro: Function,
  taskId: Number,
}

interface TimerState {
  timeLeft: String,
  doneAt: moment.Moment,
  finished: Boolean,
}

class Timer extends React.Component<TimerProps, TimerState> {
  timerHandle: NodeJS.Timer

  constructor(p: TimerProps, s: TimerState) {
    super(p, s);
    const {minutes, seconds} = this.props;
    const timeLeft = moment.utc(moment.duration({ minutes: minutes, seconds: seconds } as moment.DurationInputObject).asMilliseconds()).format("mm:ss")
    this.state = { 
      timeLeft: timeLeft,
      doneAt: moment()
        .add(minutes as unknown as moment.unitOfTime.DurationConstructor, 'minutes')
        .add(seconds as unknown as moment.unitOfTime.DurationConstructor, 'seconds'),
      finished: false,
    }
    this.timerHandle = setInterval(this.tick.bind(this), 100)
  }

  componentWillUnmount() {
    clearInterval(this.timerHandle)
  }

  tick() {
    const timeLeft = this.state.doneAt.diff(moment())
    if (timeLeft > 0 ) {
      this.setState({
        timeLeft: moment.utc(timeLeft).format('mm:ss')
      })
    } else {
      this.wrapUp()
    }
  }

  /**
   * triggered when the Timer is done
   *  - clears the interval
   *  - fires a mutation to create a pomodoro
   */
  wrapUp() {
    clearInterval(this.timerHandle)
    createPomodoro({
      taskId: Number(this.props.taskId),
      endTime: this.state.doneAt.format('YYYY-MM-DD HH:mm:ss')
    }).then(this.onMutationCompleted)
  }

  onMutationCompleted({data}) {
    toast.success(<ToastWrapper message={'Pomodoro is done.'} linkPath={`/reflect/${data.createPomodoro.id}`} linkText={'Write a reflection?'} />)
    const audio = new Audio(pomodoroDone)
    audio.play();
    this.props.onStopPomodoro()
  }

  onMutationError(error: Error) {

  }

  render() {
      return(
        <div>
          <Typography variant = "display1">
            {this.state.timeLeft}
          </Typography >
        </div>
      )
  }
}

export default Timer

