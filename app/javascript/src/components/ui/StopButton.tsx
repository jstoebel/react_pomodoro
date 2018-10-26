import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import IconButton from '@material-ui/core/IconButton';

interface I {
  stop: Function
}

const StopButton: React.SFC<I> = ({ stop }) => {
  return (
    <IconButton color="secondary" aria-label="Stop Pomodoro" onClick={() => stop()}>
      <FontAwesomeIcon icon="stop" style={{ color: 'black' }} />
    </IconButton>
  )
}

export default StopButton
