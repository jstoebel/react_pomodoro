import * as React from 'react'
import Tasks from '../../src/components/ui/Tasks'
import { shallow } from 'enzyme';
import Task from '../../src/components/containers/Task'
import { Task as TaskFixture } from '../__support__/fixtures';

describe('<Tasks />', () => {
  const tasks = [
    TaskFixture,
    TaskFixture
  ]
  const wrapper = shallow(<Tasks tasks={tasks}/>)
  test('renders tasks', () => {
    expect(wrapper.find(Task).length).toEqual(2)
  })
})