import * as React from 'react';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

interface ToastWrapperProps {
  message: string;
  linkText: string;
  linkPath: string;
  closeToast?: Function;
}

interface InjectedProps extends ToastWrapperProps {
}

const linkStyles = {
  color: 'white',
}

const ToastWrapper: React.SFC<ToastWrapperProps> = ({ message, linkPath, linkText, closeToast}) => {

  return (
    <div>
      <span>{message}</span>
      <span>
        <Link to={linkPath} onClick={closeToast} style={linkStyles}>
          {linkText}
        </Link>
      </span>
    </div>
  )
}

export default ToastWrapper