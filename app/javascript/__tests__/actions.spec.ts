import * as actions from '../src/actions';
import C from '../src/constants';
import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'

const axiosMock = new MockAdapter(axios)
const dispatchSpy = jest.fn()

beforeEach(() => {
  axiosMock.reset();
})

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