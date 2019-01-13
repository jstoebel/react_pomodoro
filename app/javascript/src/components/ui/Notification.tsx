import * as React from 'react';
import { Link } from 'react-router-dom'
import {NotificationI} from '../../interfaces/notification';
import Snackbar from '@material-ui/core/Snackbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

interface I extends NotificationI {
  key: number;
  idx: number
  onRemoveNotification: Function
}


const Notification: React.SFC<I> = ({message, level, linkPath, linkText, idx, onRemoveNotification}) => {
  console.log(`hello from notificaiton: ${idx}`);
  
  const handleClose = () => {
    console.log(`closing notification with ${idx}`);
    onRemoveNotification(idx)
  }
  return (
    <div className="notification">
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={true}
        autoHideDuration={6000}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={<span id="notification__message">{message}</span>}
        action={[
          <Link to={linkPath}>
            <Button variant="contained" href="#contained-buttons">
              {linkText}
            </Button>
          </Link>,
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>,
        ]}
      />
    </div>
  )
}

export default Notification