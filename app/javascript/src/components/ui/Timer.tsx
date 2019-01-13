import * as React from 'react'
import * as moment from 'moment';
import Typography from '@material-ui/core/Typography';
import Sound from 'react-sound';
import { toast } from 'react-toastify';
import ToastWrapper from './ToastWrapper'
// const pomodoroDone = require('../../media/pomodoroDone.mp3')

interface TimerProps {
  minutes: Number,
  seconds: Number,
  onStopPomodoro: Function,
  onAddNotification: Function,
}

interface TimerState {
  timeLeft: String,
  doneAt: moment.Moment,
  running: Boolean,
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
      running: true,
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
  wrapUp() {
    // what happens when the pomodoro is done?
    // play a sound
    // notification -> "your pomodoro is done, write a reflection?"
    this.setState({running: false})
    clearInterval(this.timerHandle)
    this.props.onStopPomodoro()
    toast.success(<ToastWrapper message={'Pomodoro is done.'} linkPath={'/reflect'} linkText={'Write a reflection?'}/>)
  }

  render() {
    const soundPlayStatus = this.state.running ? Sound.status.STOPPED : Sound.status.PLAYING
    return(
      <div>
        <Typography variant = "display1">
          {this.state.timeLeft}
        </Typography >
        {/* <Sound url={pomodoroDone} playStatus={soundPlayStatus} /> */}
      </div>
    )
  }
}

export default Timer

