import * as React from 'react';
import { NotificationI } from '../../interfaces/notification'
import Notification from '../containers/Notification'

interface NotificationProps {
  notifications: Array<NotificationI>
}

const Notifications: React.SFC<NotificationProps> = ({notifications}) => {
  return (
    <div className="notifications">
      {
        notifications.map((notification: NotificationI, idx: number) => <Notification idx={idx} key={idx} {...notification}/>
        )
      }
    </div>
  )
}

export default Notifications