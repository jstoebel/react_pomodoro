import * as React from 'react';
import {NotificationI} from '../../interfaces/notification';
import { makeStyles } from '@material-ui/styles';
import Snackbar from '@material-ui/core/Snackbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

interface I extends NotificationI {
  key: number
}

const Notification: React.SFC<I> = ({message}) => {
  return (
    <div>
      {message}
    </div>
  )
}

export default Notification