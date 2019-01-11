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
    name: Task.name,
    description: Task.description
  }

  const clickEvent = {
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
  const existingTasks = [Task, Task]
  const readQuerySpy = jest.spyOn(cache, 'readQuery')
  readQuerySpy.mockReturnValue({ allTasks: existingTasks})
  const writeQuerySpy = jest.spyOn(cache, 'writeQuery')
  const newForm = wrapper.find('NewTask')

  test('typing in fields updates state', () => {
    const nameInput = newForm.find('input.new-task__name')
    const descriptionInput = newForm.find('input.new-task__description')

    nameInput.simulate('change', { target: { name: 'name', value: 'spam' } })
    descriptionInput.simulate('change', { target: { name: 'description', value: 'eggs' } })

    expect(newForm.state()).toEqual({name: 'spam', description: 'eggs'})
  })

  test('fires create task mutation', () => {
    const createSpy = jest.spyOn(ApolloClient, 'mutate')
    newForm.setState(payload)
    wrapper.find('button').simulate('click', clickEvent)

    expect(createSpy.mock.calls[0][0].mutation).toEqual(CREATE_TASK)
    expect(createSpy.mock.calls[0][0].variables).toEqual(payload)
  })

  test('created task is added to cache', () => {
    newForm.instance().updateLocalTasks(cache, Task)
    expect(readQuerySpy).toHaveBeenCalledWith({ query: ALL_TASKS })
    expect(writeQuerySpy).toHaveBeenCalledWith({
      query: ALL_TASKS,
      data: { allTasks: existingTasks.concat([Task]) }
    })
  })
})
