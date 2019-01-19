import * as React from 'react';
import { PomodoroRecordI } from '../../interfaces/pomodoro'

interface stateI {
  title: string,
  reflection: string,
  endTime: string,
}

class EditPomodoro extends React.Component<PomodoroRecordI, stateI> {
  constructor(s, p) {
    super(s, p)
    console.log(this.props);
    
    this.state = {
      title: this.props.title,
      reflection: this.props.reflection,
      endTime: this.props.endTime,
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    console.log('hello from handle input change');
    
    const { name, value } = event.target
    const newState = Object.assign({}, this.state)
    newState[name] = value
    this.setState(newState);
  }

  render() {
    return (
      <form action="">
        <label>Name</label>
        <input type="text" value={this.state.title} name="title" onChange={this.handleInputChange}/>
    
        <label>Reflection</label>
        <input type="text" value={this.state.reflection} name="reflection" onChange={this.handleInputChange} />
    
        <label>End Time</label>
        <input type="text" value={this.state.endTime} name="endTime" onChange={this.handleInputChange} />
      </form>
    )
  }
}

export default EditPomodoro
