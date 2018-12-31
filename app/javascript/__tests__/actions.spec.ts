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
  describe('fetchTasks', () => {
    it('dispatches tasks', async () => {
      // finish this test 
      const getData = jest.fn();

      axiosMock.onGet('/tasks')
               .reply(200, getData)

      const innerFn = actions.fetchTasks()
      await innerFn(dispatchSpy)
      expect(dispatchSpy).toHaveBeenCalledWith({
        type: C.ADD_TASKS,
        payload: getData,
      });
    })

    it('displays error message when fetch fails', () => {
      // implement me!
    })
  })

  describe('addTask', () => {
    const postData = {
      name: 'task name',
      description: 'task description',
    }
    it('dispatches taskData', async () => {
      axiosMock.onPost('/tasks', postData)
        .reply(200, {})

      const innerFn = actions.addTask(postData)
      await innerFn(dispatchSpy)
      expect(dispatchSpy).toHaveBeenCalledWith({
        type: C.ADD_TASKS,
        payload: postData
      })
    })

    it('displays error message when post fails', () => {
      // implement me!
    })
  })

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