import gql from 'graphql-tag';

export default gql`mutation {
  createTask(
    name: "whatever"
    description: "description"
  ) {
    id
    name
    description
  }
}`
