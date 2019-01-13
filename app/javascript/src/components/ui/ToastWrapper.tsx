import * as React from 'react';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

interface I {
  message: string;
  linkText: string;
  linkPath: string;
  closeToast: Function;
}

const linkStyles = {
  color: 'white',
}

const ToastWrapper: React.SFC<I> = ({ message, linkPath, linkText, closeToast}) => {
  return (
    <div>
      <span>{message}</span>
      <span>
        <Link to={linkPath} onClick={closeToast}>
          <a style={linkStyles} href="#">
            {linkText}
          </a>
        </Link>
      </span>
    </div>
  )
}

export default ToastWrapper