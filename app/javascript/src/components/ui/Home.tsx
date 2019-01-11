import * as React from 'react';

import Tasks from '../ui/Tasks';
import NewTask from '../ui/NewTask'
import { Query } from 'react-apollo';
import allTasks from '../../../src/graphql/queries/allTasks'

const Home: React.SFC<{}> = () => {
  console.log('rendering home');
  
  return (
    <div>
      <NewTask />
      <Query query={allTasks}>
        {({ loading, error, data }) => {
          if (loading) return <p>loading</p>;
          if (error) return <p>error!</p>
          return <Tasks tasks={data.allTasks} />
        }}
      </Query>
    </div>
  )
}

export default Home
