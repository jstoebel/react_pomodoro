import {applyMiddleware, createStore, compose} from 'redux';
import reducers from '../src/reducers/index';
import * as React from 'react';
import {Provider} from 'react-redux';
import reduxThunk from 'redux-thunk';
import {render} from 'react-dom';
import App from '../src/components/ui/App'
import { ApolloProvider } from "react-apollo";
import client from '../src/apollo_client';
import '../src/fonts';

import startingState from '../src/initialState';

/* set up of store
  1) pull state from browser
  2) creates the store with middle ware and initial state
  3) add subscription to store so its saved to browser localStorage
*/

// either pulls local storage or, if its absent, grabs from sample data
const initialState = (localStorage['redux-store']) ?
  JSON.parse(localStorage['redux-store']) :
  startingState;
const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

// allow an explicet propery on window for the redux dev tool
declare global {
  interface Window { __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any; }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, initialState, composeEnhancers(applyMiddleware(reduxThunk)))

const statefulStore = (
  <Provider store={store}>
    <ApolloProvider client={client}>
      <App/>
    </ApolloProvider>
  </Provider>
)
render(
  statefulStore, 
  document.querySelector('#app-root')
);
