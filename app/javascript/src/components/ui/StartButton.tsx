import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import IconButton from '@material-ui/core/IconButton';

interface I {
  taskId: Number,
  start: Function
}

const StartButton: React.SFC<I> = ({taskId, start}) => {
  return(
    <IconButton color="secondary" aria-label="Start Pomodoro" onClick={() => start(taskId)}>
      <FontAwesomeIcon icon="play" style={{color: 'black'}}/>
    </IconButton>
  )
}

export default StartButton
