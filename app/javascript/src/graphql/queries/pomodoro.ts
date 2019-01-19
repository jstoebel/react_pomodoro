import gql from 'graphql-tag';

export default gql`
  query pomodoro($id: Int!) {
    pomodoro(id: $id) {
      id
      title
      reflection
      end_time
      created_at
      updated_at
    }
  }
`;

