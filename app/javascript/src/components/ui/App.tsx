import * as React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from '../containers/Home';
import NotFound from './NotFound'
import Notifications from '../containers/Notifications'

const App: React.SFC<{}> = (props) => {

  return (
    <div>
      <Notifications />
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route component={NotFound}/>
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App