// see https://github.com/the-road-to-graphql/react-apollo-client-testing-example/tree/master/src
// for help on mocking the apollo client. TLDR: Its not simple!

import * as React from 'react'
import NewTask from '../../src/components/ui/NewTask'
import { mount } from 'enzyme';
import CREATE_TASK from '../../src/graphql/queries/createTask'
import { Task } from '../__support__/fixtures';
import { ApolloProvider } from 'react-apollo';
import { Provider as ReduxProvider } from 'react-redux';
import store from '../__support__/store'
import ApolloClient, {cache} from '../__support__/apolloClient'
import ALL_TASKS from '../../src/graphql/queries/allTasks'

describe('<NewTask />', () => {

  const payload = {
    name: 'a name',
    description: 'a description'
  }

  const event = {
    preventDefault: jest.fn(),
    target: {
      name: { value: payload.name },
      description: { value: payload.description }
    }
  }

  const wrapper = mount(
    <ReduxProvider store={store}>
      <ApolloProvider client={ApolloClient}>
        <NewTask />
      </ApolloProvider>
    </ReduxProvider>
  )

  const readQuerySpy = jest.spyOn(cache, 'readQuery')
  readQuerySpy.mockReturnValue({allTasks: [Task, Task]})
  const writeQuerySpy = jest.spyOn(cache, 'writeQuery')

  test.skip('typing in fields updates state', () => {
  })

  test('fires create task mutation', () => {
    const createSpy = jest.spyOn(ApolloClient, 'mutate')
    const newForm = wrapper.find('NewTask')
    newForm.setState(payload)
    wrapper.find('button').simulate('click', event)

    expect(createSpy.mock.calls[0][0].mutation).toEqual(CREATE_TASK)
    expect(createSpy.mock.calls[0][0].variables).toEqual(payload)
  })


  test('created task is added to cache', () => {
    expect(readQuerySpy).toHaveBeenCalledWith({ query: ALL_TASKS })
    expect(true).toBe(false)
    // fix this!
    // expect(writeQuerySpy).toHaveBeenCalledWith({
    //   query: ALL_TASKS,
    //   data: { allTasks: allTasks.concat([createdTask]) }
    // })
  })
})
