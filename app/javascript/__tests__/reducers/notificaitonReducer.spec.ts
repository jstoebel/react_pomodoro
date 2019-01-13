import notifcationsReducer from '../../src/reducers/notificationsReducer'
import C from '../../src/constants'
import { NotificationI } from '../../src/interfaces/notification'
import { Notification} from '../__support__/fixtures'

const aNotification: NotificationI = {
          message: 'first message',
          level: "info",
          linkPath: 'more-info',
};
const anotherNotification: NotificationI = {
          message: 'second message',
          level: "info",
          linkPath: 'more-info',
};

describe('notifcationsReducer', () => {
  describe('ADD_NOTIFICATION', () => {
    const addNotification = (currentNotifications: NotificationI[], newNotifications: NotificationI | number) => {
      return notifcationsReducer(
        currentNotifications,
        {
          type: C.ADD_NOTIFICATION,
          payload: newNotifications,
        }
      )
    }
    test('adds notifications to empty state', () => {
      const result = addNotification([], aNotification)
      expect(result).toEqual([aNotification])
    })

    test('adds notifications to existing state', () => {
      const result = addNotification([aNotification], anotherNotification)
      expect(result).toEqual([aNotification].concat(anotherNotification))
    })

    it('throws error when passed a number', () => {
      expect(() => {addNotification([aNotification], 1)}).toThrow(Error)
    })
  })

  describe('REMOVE_NOTIFICATION', () => {
    const removeNotification = (currentNotifications: NotificationI[], index: number | NotificationI) => {
      return notifcationsReducer(
        currentNotifications,
        {
          type: C.REMOVE_NOTIFICATION,
          payload: index,
        }
      )
    }

    it('removes the right notification', () => {
      const currentNotifications = [
        aNotification,
        anotherNotification,
      ]
      const result = removeNotification(currentNotifications, 1)
      expect(result).toEqual([aNotification])
    })

    it('throws error when passed a notification', () => {
      expect(() => {removeNotification([aNotification], anotherNotification)}).toThrow(Error)
    })
  })

  describe('no matching action', () => {
    test('returns existing state', () => {
      const result = notifcationsReducer(
        [],
        {
          type: 'RANDOM_ACTION',
          payload: Notification,
        }
      )

      expect(result).toEqual([])
    })
  })
})
