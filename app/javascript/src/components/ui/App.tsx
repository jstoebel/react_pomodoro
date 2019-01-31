import * as React from 'react'
import { Route, Switch } from "react-router-dom";
import Home from '../containers/Home';
import EditPomodoro from '../containers/EditPomodoro'
import NotFound from './NotFound'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App: React.SFC<{}> = (props) => {
 
  return (
    <div>
        <div>
          <ToastContainer 
            autoClose={false}
            closeOnClick={false}
          />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/reflect/:id" component={EditPomodoro} />
            <Route component={NotFound}/>
          </Switch>
        </div>
    </div>
  )
}

export default App