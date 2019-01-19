import * as React from 'react';
import IconButton from '@material-ui/core/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import StartButton from './StartButton'
import StopButton from './StopButton'
import {TaskI} from '../../interfaces/task'
import Timer from '../containers/Timer'
import C from '../../constants'

const styles = {
  card: {
    fontFamily: 'sans-serif',
    minWidth: 200,
    minHeight: 200,
    margin: 10
  },
}

interface TaskProps extends TaskI {
  key: number,
  classes: {
    card: string,
  },
  pomodoros: {
    runningTask: Number
  },
  onStartPomodoro: Function,
  onStopPomodoro: Function
}

const Task: React.SFC<TaskProps> = ({ id, name, classes, pomodoros, onStartPomodoro, onStopPomodoro}) => {

  const isRunning = pomodoros.runningTask === id
  const button = isRunning ?
    <StopButton stop={onStopPomodoro} /> :
    <StartButton start={onStartPomodoro} taskId={id} />

  return(
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="headline">
          {name}
        </Typography>
        <div className="button">
          {button}
        </div>
        {isRunning && <Timer taskId={id} {...C.POMODORO_TIME}/>}
      </CardContent>
    </Card>
  )
}

export default withStyles(styles)(Task);