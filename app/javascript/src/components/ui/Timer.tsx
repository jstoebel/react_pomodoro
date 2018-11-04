import * as React from 'react'
import PomodoroI from '../../interfaces/pomodoro'
import C from '../../constants';
import * as moment from 'moment';
import Typography from '@material-ui/core/Typography';

interface TimerProps {
  minutes: Number,
  seconds: any //moment.unitOfTime.DurationConstructor,
  pomodoros: PomodoroI
}


interface TimerState {
  timeLeft: String,
  doneAt: moment.Moment,
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
    // update time left and update state
    // if time is up -> wrapUp
  }
  wrapUp() {
    // what happens when the pomodoro is done?
    console.log('hello from wrapUp');
    // play a sound
    // notification -> "your pomodoro is done, write a reflection?"
    clearInterval(this.timerHandle)
  }

  render() {
    return(
      <Typography variant = "display1">
        {this.state.timeLeft}
      </Typography >
    )
  }
}

export default Timer

