import * as React from 'react'
import StartButton from '../../src/components/ui/StartButton'
import IconButton from '@material-ui/core/IconButton';
import { shallow } from 'enzyme';

describe('<StartButton />', () => {
  const startSpy = jest.fn()
  const taskId = 1
  const wrapper = shallow(<StartButton taskId={taskId} start={startSpy} />)

  test('calls start with taskId', () => {
    wrapper.find(IconButton).simulate('click')
    expect(startSpy).toBeCalledWith(taskId)
  })
})