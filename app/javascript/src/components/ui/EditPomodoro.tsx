import * as React from 'react';
import { PomodoroRecordI } from '../../interfaces/pomodoro'
import { Mutation } from 'react-apollo';
import UPDATE_POMODORO from '../../graphql/queries/updatePomodoro'
import History from 'history'

interface stateI {
  title: string,
  reflection: string,
  endTime: string,
}

interface IProps extends PomodoroRecordI {
  history: History
}

class EditPomodoro extends React.Component<IProps, stateI> {
  constructor(s, p) {
    super(s, p)
    
    this.state = {
      title: this.props.title || '',
      reflection: this.props.reflection || '',
      endTime: this.props.end_time || '',
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const { name, value } = event.target
    const newState = Object.assign({}, this.state)
    newState[name] = value
    this.setState(newState);
  }

  handleFormSubmit(event) {
    event.preventDefault();
  }

  render() {

    const { title, reflection, endTime} = this.state;
    const id = this.props.id
    
    return (
      <form onSubmit={this.handleFormSubmit}>
        <label>Name</label>
        <input type="text" value={title} name="title" onChange={this.handleInputChange}/>
    
        <label>Reflection</label>
        <input type="text" value={reflection} name="reflection" onChange={this.handleInputChange} />
    
        <label>End Time</label>
        <input type="text" value={endTime} name="endTime" onChange={this.handleInputChange} />
        <Mutation
          mutation={UPDATE_POMODORO}
          variables={{ id, title, reflection, end_time: endTime }}
          onCompleted={() => this.props.history.push('/')}
        >
          {editPomodoro => <button onClick={() => { editPomodoro() }}>Submit</button>}
        </Mutation>
      </form>
    )
  }
}

export default EditPomodoro
