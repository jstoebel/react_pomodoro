import * as React from 'react'
import Home from '../../src/components/ui/Home'
import Tasks from '../../src/components/ui/Tasks'
import NewTask from '../../src/components/containers/NewTask'
import {shallow} from 'enzyme';
import { Task } from '../__support__/fixtures';

describe('<Home/>', () => {
  const tasks = [
    Task,
    Task
  ]
  const onFetchTasksSpy = jest.fn();
  const wrapper = shallow(<Home tasks={tasks} onFetchTasks={onFetchTasksSpy} />);

  test('calls onFetchTasks', () => {
    expect(onFetchTasksSpy.mock.calls.length).toBe(1);
  })

  test('renders NewTask', () => {
    expect(wrapper.find(NewTask).length).toEqual(1)
  })

  test('renders Tasks with task data', () => {
    const tasksWrapper = wrapper.find(Tasks)
    expect(tasksWrapper.length).toEqual(1)
    expect(tasksWrapper.first().prop('tasks')).toEqual(tasks);
    
  })
})