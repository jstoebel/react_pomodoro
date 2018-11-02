import * as React from 'react'
import PomodoroI from '../../interfaces/pomodoro'
import C from '../../constants';
import * as moment from 'moment';
import Typography from '@material-ui/core/Typography';

interface TimerProps {
  isOn: Boolean,
  pomodoros: PomodoroI
}


interface TimerState {
  timeLeft: string,
}

class Timer extends React.Component<TimerProps, TimerState> {
  timerHandle: NodeJS.Timer

  constructor(p: TimerProps, s: { timeLeft: string}) {
    super(p, s)
    this.state = { 
      timeLeft: `${C.POMODORO_TIME.minutes}:${C.POMODORO_TIME.seconds}`
    }
    // set the intervarl
    this.timerHandle = setInterval(this.tick.bind(this), 500)
  }

  componentWillUnmount() {
    clearInterval(this.timerHandle)
  }

  tick() {
    const timeLeft = this.props.pomodoros.doneAt.diff(moment())
    const timeLeftFormatted = moment.utc(timeLeft).format('mm:ss')
    this.setState({
      timeLeft: timeLeftFormatted
    })
    // update time left and update state
    // if time is up -> wrapUp
  }
  wrapUp() {
    // what happens when the pomodoro is done?
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

