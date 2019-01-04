import gql from 'graphql-tag';

export default gql`
    {
      allTasks{
        id
        name
        description
      }
    }
  `;

