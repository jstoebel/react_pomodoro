import * as React from 'react'
import Home from '../../src/components/ui/Home'
import Tasks from '../../src/components/ui/Tasks'
import NewTask from '../../src/components/containers/NewTask'
import {mount} from 'enzyme';
import { Task } from '../__support__/fixtures';
import { MockedProvider } from 'react-apollo/test-utils';
import allTasks from '../../src/graphql/queries/allTasks';

const mocks = [
  {
    request: {
      query: allTasks,
      variables: {},
    },
    result: {
      "data": {
        "allTasks": [
          {
            "id": "1",
            "name": "A Task",
            "description": "A Description"
          },
          {
            "id": "2",
            "name": "A Task 2",
            "description": "A Description 2"
          },
        ]
      }
    }
  },
];


describe('<Home/>', () => {
  const tasks = [
    Task,
    Task
  ]
  const wrapper = mount(
    <MockedProvider addTypename={false} mocks={mocks}>
      <Home />
    </MockedProvider>
  );

  test('renders NewTask', () => {
    expect(wrapper.find(NewTask).length).toEqual(1)
  })

  test('renders Tasks with task data', () => {
    const tasksWrapper = wrapper.find(Tasks)
    expect(tasksWrapper.length).toEqual(1)
    expect(tasksWrapper.first().prop('tasks')).toEqual(tasks);
    
  })
})