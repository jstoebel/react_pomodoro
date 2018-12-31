import * as React from 'react'
import NewTask from '../../src/components/ui/NewTask'
import { shallow } from 'enzyme';

describe('<NewTask />', () => {
  const onAddTaskSpy = jest.fn();
  const wrapper = shallow(<NewTask onAddTask={onAddTaskSpy}/>)
  test('submitted data passed to onAddTask', () => {
    const payload = {
      name: 'a name',
      description: 'a description'
    }

    const event = {
      preventDefault: jest.fn(),
      target: {
        elements: {
          name: {value: payload.name},
          description: { value: payload.description}
        }
      }
    }
    wrapper.find('form').simulate('submit', event)
    expect(onAddTaskSpy).toBeCalledWith(payload)
  })
})