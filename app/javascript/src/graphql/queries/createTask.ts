import gql from 'graphql-tag';

export default gql`
  mutation createTask($name: String!, $description: String!) {
    createTask(name: $name, description: $description) {
      id
      name
      description
      created_at
      updated_at
    }
  }
`
