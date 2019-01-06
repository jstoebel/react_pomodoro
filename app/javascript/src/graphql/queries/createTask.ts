import gql from 'graphql-tag';

export default gql`
  mutation createTask($name: String!, $description: String!) {
    task(name: $name, description: $description) {
      id
      name
      description
      created_at
      updated_at
    }
  }
`
