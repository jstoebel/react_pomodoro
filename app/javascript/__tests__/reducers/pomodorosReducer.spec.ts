import pomodorosReducer from '../../src/reducers/pomodorosReducer'
import C from '../../src/constants'

describe('pomodorosReducer', () => {
  describe('START_POMODORO', () => {
    const startPomodoro = (oldTask: Number, newTask: Number) => {
      return pomodorosReducer(
        {runningTask: oldTask},
        {
          type: C.START_POMODORO,
          payload: newTask,
        }
      )
    }

    test('adds a running task when none are running', () => {
      const result = startPomodoro(null, 1)
      expect(result).toEqual({runningTask: 1})
    })

    test('changes the running task', () => {
      const result = startPomodoro(1, 2)
      expect(result).toEqual({ runningTask: 2 })
    })
  })

  describe('STOP_POMODORO', () => {
    const stopPomodoro = (currentTask: Number) => {
      return pomodorosReducer(
        { runningTask: currentTask },
        {
          type: C.STOP_POMODORO,
        }
      )
    }

    test('stops a running pomodoro', () => {
      const result = stopPomodoro(1)
      expect(result).toEqual({runningTask: null})
    })

    test('doesn\'t mind if no task is running', () => {
      const result = stopPomodoro(null)
      expect(result).toEqual({ runningTask: null })
    })
  })

  describe('no matching action', () => {
    test('returns existing state', () => {
      const result = pomodorosReducer(
        {runningTask: 1},
        {
          type: 'RANDOM_ACTION',
          payload: 2,
        }
      )

      expect(result).toEqual({ runningTask: 1 })
    })
  })
})