import * as React from 'react';
import Tasks from '../ui/Tasks';
import NewTask from '../containers/NewTask'
import {TaskI} from '../../interfaces/task'

interface HomeProps {
  tasks: Array<TaskI>,
  onFetchTasks: Function
}

class Home extends React.Component<HomeProps, {}> {
  constructor(p: HomeProps, s: {}) {
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

export default Home