import * as React from 'react'
import Task from '../../src/components/ui/Task'
import StartButton from '../../src/components/ui/StartButton'
import StopButton from '../../src/components/ui/StopButton'
import { mount } from 'enzyme';
import {Task as TaskFixture} from '../__support__/fixtures';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from '../../src/reducers'

describe('<Task />', () => {
  const taskProps = {
    key: 1,
    onStartPomodoro: jest.fn(),
    onStopPomodoro: jest.fn(),
    ...TaskFixture
  }
  describe('timer is not running', () => {
    test('renders start button', () => {
      const wrapper = mount(<Task
        pomodoros={{ runningTask: taskProps.id + 1}} // make running task different from this task
        {...taskProps}
      />)
      expect(wrapper.find('StartButton').length).toEqual(1)
    })
  })

  describe('timer is running', () => {
    const store = createStore(reducers, {});
    const wrapper = mount(
      <Provider store={store} >
        <Task
          pomodoros={{ runningTask: taskProps.id}}
          {...taskProps}
        />
      </Provider>
    )
    test('renders stop button', () => {
      expect(wrapper.find('StopButton').length).toEqual(1)
    })

    test('renders <Timer />', () => {
      expect(wrapper.find('Timer').length).toEqual(1)
    })
  })
})