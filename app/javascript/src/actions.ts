import C from './constants';
import {NotificationI} from '../src/interfaces/notification'

export const startPomodoro = (taskId: Number) => {
  return({
    type: C.START_POMODORO,
    payload: taskId,
  })
}

export const stopPomodoro = () => {
  return ({
    type: C.STOP_POMODORO,
    payload: null,
  })
}

export const addNotification = (notification: NotificationI) => {
  return({
    type: C.ADD_NOTIFICATION,
    payload: notification
  })
}

export const removeNotification = (index: number) => {
  return ({
    type: C.REMOVE_NOTIFICATION,
    payload: index,
  })

}