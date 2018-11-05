import * as React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from '../containers/Home';
import NotFound from './NotFound'

const App: React.SFC<{}> = (props) => {
  return (
    <div>
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