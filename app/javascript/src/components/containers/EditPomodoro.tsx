import * as React from 'react';
import GET_POMODORO from '../../graphql/queries/pomodoro'
import EditPomodoro from '../ui/EditPomodoro'
import { Query } from 'react-apollo';

interface I {
  match: {
    params: {
      id: number
    }
  };
}

const EditPomodoroContainer: React.SFC<I> = ({match}) => {
  console.log(match);
  
  return (
    <Query 
    query={GET_POMODORO}
    variables={{id: Number(match.params.id)}}
    >
      {({ loading, error, data }) => {
        if (loading) return <p>loading</p>;
        if (error) return <p>error!</p>
        console.log(data);
        return <EditPomodoro {...data.pomodoro[0]} />
      }}
    </Query>
  )
}

export default EditPomodoroContainer