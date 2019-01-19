import * as actions from '../src/actions';
import C from '../src/constants';
import {Notification} from './__support__/fixtures'

describe('actions', () => {

  describe('startPomodoro', () => {
    it('returns correct object', () => {
      const result = actions.startPomodoro(1)
      expect(result).toEqual({
        type: C.START_POMODORO,
        payload: 1,
      })
    })
  })

  describe('stopPomodoro', () => {
    it('returns correct object', () => {
      const result = actions.stopPomodoro()
      expect(result).toEqual({
        type: C.STOP_POMODORO,
        payload: null,
      })
    })
  })
})