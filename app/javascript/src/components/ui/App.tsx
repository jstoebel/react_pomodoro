import * as React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from '../containers/Home';
import NotFound from './NotFound'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App: React.SFC<{}> = (props) => {
 
  return (
    <div>
      <Router>
        <div>
          <ToastContainer 
            autoClose={false}
            closeOnClick={false}
          />
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