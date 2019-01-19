import gql from 'graphql-tag';

export default gql`
  mutation createPomodoro($title: String!, $end_time: String!, $task_id: Int!) {
    createPomodoro(title: $title, end_time: $end_time, task_id: $task_id) {
      id
    }
  }
`
