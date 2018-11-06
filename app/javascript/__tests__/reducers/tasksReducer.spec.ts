import tasksReducer from '../../src/reducers/tasksReducer'
import C from '../../src/constants'
import { TaskBaseI } from '../../src/interfaces/task'

const aTask = [
  {
    name: 'first task',
    description: 'first description'
  },
]

const anotherTask = [
  {
    name: 'second task',
    description: 'second description'
  }
]

describe('tasksReducer', () => {
  describe('ADD_TASKS', ()=> {
    const addTask = (currentTasks: TaskBaseI[], newTasks: TaskBaseI[]) => {
      return tasksReducer(
        currentTasks,
        {
          type: C.ADD_TASKS,
          payload: newTasks,
        }
      )
    }
    test('adds tasks to empty state', () => {
      const result = addTask([], aTask)
      expect(result).toEqual(aTask)
    })

    test('adds tasks to existing state', () => {
      const result = addTask(aTask, anotherTask)
      expect(result).toEqual(aTask.concat(anotherTask))
    })
  })

  describe('no matching action', () => {
    test('returns existing state', () => {
      const result = tasksReducer(
        [],
        {
          type: 'RANDOM_ACTION',
          payload: aTask,
        }
      )

      expect(result).toEqual([])
    })
  })
})
