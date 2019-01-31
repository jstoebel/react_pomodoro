import gql from 'graphql-tag';

export default gql`
  mutation updatePomodoro(
    $id: ID!,
    $title: String,
    $reflection: String,
    $end_time: String
    
  ) {
    updatePomodoro(
      id: $id
      title: $title
      reflection: $reflection
      end_time: $end_time
    ) {
      id
      title
      reflection
      end_time
      created_at
      updated_at
    }
  }
`

