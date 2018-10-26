import * as React from 'react';
import TaskI from '../../interfaces/task'
import Task from './Task'

const styles = {
  display: 'flex' as 'flex',
  flexWrap: 'wrap' as 'wrap',
}

interface TasksProps {
  tasks: Array<TaskI>
}
const Tasks: React.SFC<TasksProps> = ({tasks}) => {
  return <div style={styles}>
    {
      tasks.map((
          task: TaskI, idx: number
        ) => (<Task key={idx} {...task} />)
      )
    }
  </div>
} 

export default Tasks