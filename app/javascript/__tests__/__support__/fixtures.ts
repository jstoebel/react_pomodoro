import { TaskBaseI, TaskI} from '../../src/interfaces/task'
import {NotificationI} from '../../src/interfaces/notification'

// TODO: turn these into functions which return a fresh object reach time.
// have them accept an object of similar shape which lets you override the value

export const TaskBase: TaskBaseI = {
  name: 'a name',
  description: 'a description'
}

export const Task: TaskI = Object.assign(
  TaskBase,
  {
    id: 1,
    created_at: '1/1/2019',
    updated_at: '1/1/2019',
    __typename: 'Task'
  }
)

export const Notification: NotificationI = {
  message: 'a test message',
  level: 'info',
  linkPath: '/more-info',
  linkText: 'more info'
}