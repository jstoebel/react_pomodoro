import * as React from 'react'
import Home from '../../../src/components/containers/Home';
import {shallow} from 'enzyme';
import { createStore } from 'redux';
import reducers from '../../../src/reducers/index'
import { Provider } from 'react-redux';

const store = createStore(reducers, {});

describe('<Home/>', () => {
  it('has task state', () => {
    // not sure how to test that props are setup right
    // // how do I test that 
    // const container = shallow(
    //   <Provider store={store}>
    //     <Home />
    //   </Provider>
    // )
    // const home = container.find(Home).first()
    // console.log(home.props());
  })
})