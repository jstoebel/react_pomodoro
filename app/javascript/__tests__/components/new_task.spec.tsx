// see https://github.com/the-road-to-graphql/react-apollo-client-testing-example/tree/master/src

import * as React from 'react'
import NewTask from '../../src/components/ui/NewTask'
import { mount } from 'enzyme';
import CREATE_TASK from '../../src/graphql/queries/createTask'
import { Task } from '../__support__/fixtures';
import { ApolloProvider } from 'react-apollo';
import { Provider as ReduxProvider } from 'react-redux';
import store from '../__support__/store'
import ApolloClient from '../__support__/apolloClient'

describe('<NewTask />', () => {
  // const onAddTaskSpy = jest.fn();
  // const wrapper = shallow(<NewTask onAddTask={onAddTaskSpy}/>)
  // test('submitted data passed to onAddTask', () => {

  //   wrapper.find('form').simulate('submit', event)
  //   expect(onAddTaskSpy).toBeCalledWith(payload)
  // })

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

  test('fires create task mutation', () => {
    const createSpy = jest.spyOn(ApolloClient, 'mutate')
    const newForm = wrapper.find('NewTask')
    newForm.setState(payload)
    wrapper.find('button').simulate('click', event)
    expect(createSpy.mock.calls[0][0].mutation).toEqual(CREATE_TASK)
    expect(createSpy.mock.calls[0][0].variables).toEqual(payload)
  })

  test.skip('typing in fields updates state', () => {
  })
})
