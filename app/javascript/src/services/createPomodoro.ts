import client from '../apollo_client'
import CREATE_POMODORO from '../graphql/queries/createPomodoro'

/**
 * 
 * @param {number} taskId number representing the task owning this pomodoro
 * @returns {Promise} representing result of mutation
 */
const createPomodoro = (
  {taskId, endTime} : {taskId: Number, endTime: String} 
) => {
  return client.mutate({
    mutation: CREATE_POMODORO,
    variables: {
      title: 'new pomodoro',
      task_id: taskId,
      end_time: endTime,
    }
  })
}

export default createPomodoro