import * as React from 'react';
import Timer from '../../src/components/ui/Timer';
import {mount} from 'enzyme'
import * as moment from 'moment';
const MockDate = require('mockdate')

const mockTime = moment('2000-01-01')
let timerHandle;
let wrapper
const totalSeconds = 2;
describe('<Timer />', () => {
  beforeEach(() => {
    wrapper = mount(
      <Timer
      minutes={0}
      seconds={totalSeconds}
      />
    )
    timerHandle = wrapper.instance().timerHandle
    console.log(`mocking time to ${mockTime}`);
    MockDate.set(mockTime)
  })
  afterEach(() => {
    console.log('reseting time');
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
      // MockDate.reset()
      const newTime = mockTime.add(1, 'second');
      console.log(`mocking time to ${newTime}`);
      MockDate.set(newTime);
      console.log(`inside test ${moment()}`);
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
  })

  describe('render', () => {
    test('renders time left', () => {
      expect(wrapper.find('Typography').first().text()).toEqual('00:02')
    })
  })
})
