import * as React from 'react'
import StopButton from '../../src/components/ui/StopButton'
import IconButton from '@material-ui/core/IconButton';
import { shallow } from 'enzyme';

describe('<StopButton />', () => {
  const stopSpy = jest.fn()
  const wrapper = shallow(<StopButton stop={stopSpy} />)

  test('calls start with taskId', () => {
    wrapper.find(IconButton).simulate('click')
    expect(stopSpy).toBeCalled()
  })
})