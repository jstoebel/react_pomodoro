import { Reducer, Action } from 'redux';
import { NotificationI } from '../interfaces/notification'
import C from '../constants';

const initialState = []

interface actionI {
  type: String,
  payload: NotificationI | number
}

function isNotification(payload: NotificationI | Number): payload is NotificationI {
  return (<NotificationI>payload).message !== undefined;
}

const reducer: Reducer<NotificationI[]> = (state = initialState, action: actionI) => {
  const {payload} = action
  switch (action.type) {
    case C.ADD_NOTIFICATION:
      if (isNotification(payload)) {
        return state.concat(payload)
      } else {
        throw new Error('a number was passed to REMOVE_NOTIFICATION when a notification was expected')
      }
    case C.REMOVE_NOTIFICATION:
      if (!isNotification(payload)) {
        const newNotifications = state.slice()
        newNotifications.splice(payload, 1)
        return newNotifications
      } else {
        throw new Error('a notification was passed to REMOVE_NOTIFICATION when a number was expected')
        
      }
  }
  return state;
}

export default reducer