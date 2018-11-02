import * as React from 'react';
import Tasks from '../ui/Tasks';
import NewTask from '../containers/NewTask'
import {TaskI} from '../../interfaces/task'

interface AppProps {
  tasks: Array<TaskI>,
  onFetchTasks: Function
}

class App extends React.Component<AppProps, {}> {
  constructor(p: AppProps, s: {}) {
    super(p, s)
    this.props.onFetchTasks()
  }

  render() {

    return (
      <div>
        <NewTask />
        <Tasks tasks={this.props.tasks}/>
      </div>
    )
  }
}

export default App