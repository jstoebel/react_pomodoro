import * as React from 'react'
import Home from '../../src/components/ui/Home'
import Tasks from '../../src/components/ui/Tasks'
import NewTask from '../../src/components/containers/NewTask'
import {mount} from 'enzyme';
import { Task } from '../__support__/fixtures';
import { MockedProvider as ApolloMockedProvider } from 'react-apollo/test-utils';
import { Provider as ReduxProvider } from 'react-redux';
import allTasks from '../../src/graphql/queries/allTasks';
import store from '../__support__/store'
const wait = require('waait');

const tasks = [
  Task,
  Task
]

const mocks = [
  {
    request: {
      query: allTasks,
      variables: {},
    },
    result: {
      data: {
        allTasks: tasks
      }
    }
  },
];


describe('<Home/>', () => {
  const wrapper = mount(
    <ReduxProvider store={store}>
      <ApolloMockedProvider addTypename={false} mocks={mocks}>
        <Home />
      </ApolloMockedProvider>
    </ReduxProvider>
  );


  test.skip('renders NewTask', async () => {
    expect(wrapper.find(NewTask).length).toEqual(1)
  })

  test('renders Tasks with task data', async () => {
    await wait(0);
    wrapper.update()
    const tasksWrapper = wrapper.find(Tasks)
    expect(tasksWrapper.length).toEqual(1)
    expect(tasksWrapper.first().prop('tasks')).toEqual(tasks);
  })
})