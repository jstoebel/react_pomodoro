import * as React from 'react';
import { Mutation } from 'react-apollo';
import CREATE_TASK from '../../graphql/queries/createTask'
import { TaskBaseI } from '../../interfaces/task'

class NewTask extends React.Component<{}, TaskBaseI> {
  constructor(s, p) {
    super(s, p)
    this.state = {
      name: '',
      description: '',
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  handleInputChange(event) {
    const {name, value} = event.target
    const newState = Object.assign({}, this.state)
    newState[name] = value
    this.setState(newState);
  }

  handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  render() {
    const { name, description } = this.state
    return (
      <div>
        <form onSubmit={(event) => this.handleFormSubmit(event)}>
          <div>
            <label>name</label>
            <input
              name="name"
              type="text"
              onChange={this.handleInputChange}
            />
          </div>

          <div>
            <label>description</label>
            <input
              name="description"
              type="text"
              onChange={this.handleInputChange}
            />
          </div>
          <Mutation mutation={CREATE_TASK} variables={{ name, description }}>
            {createTask => <button onClick={() => {createTask() }}>Submit</button>}
          </Mutation>
        </form>
      </div>
    )
  }
}

export default NewTask
