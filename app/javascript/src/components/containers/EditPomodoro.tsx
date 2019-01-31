import * as React from 'react';
import GET_POMODORO from '../../graphql/queries/pomodoro'
import EditPomodoro from '../ui/EditPomodoro'
import { Query } from 'react-apollo';
import History from 'history'

interface I {
  match: {
    params: {
      id: number
    }
  };
  history: History
}

const EditPomodoroContainer: React.SFC<I> = ({match, history}) => {
  return (
    <Query 
    query={GET_POMODORO}
    variables={{id: Number(match.params.id)}}
    >
      {({ loading, error, data }) => {
        if (loading) return <p>loading</p>;
        
        if (error) return <p>error!</p>
        return <EditPomodoro history={history} {...data.pomodoro[0]} />
      }}
    </Query>
  )
}

export default EditPomodoroContainer