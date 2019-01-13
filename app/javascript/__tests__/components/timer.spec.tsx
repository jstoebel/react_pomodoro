import * as React from 'react';
import Timer from '../../src/components/ui/Timer';
import {mount} from 'enzyme'
import {stopPomodoro} from '../../src/actions'

import * as moment from 'moment';
const MockDate = require('mockdate')

const stopPomodoroSpy = jest.fn()
const addNotificationSpy = jest.fn()
const mockTime = moment('2000-01-01')
let timerHandle;
let wrapper
const totalSeconds = 2;
describe('<Timer />', () => {
  beforeEach(() => {
    MockDate.set(mockTime)
    wrapper = mount(
      <Timer
        minutes={0}
        seconds={totalSeconds}
        onStopPomodoro={stopPomodoroSpy}
        onAddNotification={addNotificationSpy}
      />
    )
    timerHandle = wrapper.instance().timerHandle
  })
  afterEach(() => {
    MockDate.reset();
  })

  describe('constructor', () => {
    test('sets up internal state', () => {
      expect(wrapper.state('doneAt').toJSON())
        .toEqual(
          mockTime.add(2, 'seconds').toJSON()
        )
      expect(wrapper.state('timeLeft')).toEqual('00:02');
      expect(wrapper.state('running')).toBe(true);
      
    })

    test('sets timerHandle', () => {
      expect(timerHandle).toBeTruthy();
    })
  })
  
  describe('unmount', () => {
    test('timer is cleared', () => {
      jest.useFakeTimers();
      wrapper.unmount();
      expect(clearInterval).toHaveBeenLastCalledWith(timerHandle)
    })

  })

  describe('tick', () => {
    test('refreshes timeLeft when time remains', () => {
      const newTime = mockTime.add(1, 'second');
      MockDate.set(newTime);
      wrapper.instance().tick();
      wrapper.update();
      expect(wrapper.state('timeLeft')).toEqual('00:01')
    })

    test('wraps up when done', () => {
      const wrapUpSpy = jest.spyOn(Timer.prototype, 'wrapUp')
      const newTime = mockTime.add(totalSeconds, 'seconds')
      MockDate.set(newTime)
      wrapper.instance().tick();
      wrapper.update();
      expect(wrapUpSpy).toHaveBeenCalled()
    })
  })

  describe('wrapUp', () => {
    beforeEach(() => {
      jest.useFakeTimers();
      wrapper.instance().wrapUp()
    })
    test('clears interval', () => {
      expect(clearInterval).toHaveBeenLastCalledWith(timerHandle)
    })

    test('updates state', () => {
      wrapper.update();
      expect(wrapper.state('running')).toBe(false)
    })

    test('stops pomodoro', () => {
      expect(stopPomodoroSpy).toBeCalledWith()
    })

    test('adds pomodoro', () => {
      expect(addNotificationSpy).toBeCalledWith({
        message: 'Pomodoro is done. Write a relfection?',
        level: 'success',
        linkPath: '/reflect',
      })
    })
  })

  describe('render', () => {
    test('renders time left', () => {
      expect(wrapper.find('Typography').first().text()).toEqual('00:02')
    })
  })
})
