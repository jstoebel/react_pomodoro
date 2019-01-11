import * as React from 'react';
import { Mutation } from 'react-apollo';
import CREATE_TASK from '../../graphql/queries/createTask'
import { TaskBaseI } from '../../interfaces/task'
import ALL_TASKS from '../../../src/graphql/queries/allTasks'
import { DataProxy } from 'apollo-cache'
import {FetchResult} from 'apollo-link'

// defines an array of task objects
interface AllTasksI {
  allTasks: Array<TaskBaseI>;
}

class NewTask extends React.Component<{}, TaskBaseI> {
  constructor(s, p) {
    super(s, p)
    this.state = {
      name: '',
      description: '',
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.updateLocalTasks = this.updateLocalTasks.bind(this);
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

  updateLocalTasks(cache: DataProxy, createdTask: TaskBaseI) {
    const { allTasks } = cache.readQuery<AllTasksI>({ query: ALL_TASKS })!;
    cache.writeQuery({
      query: ALL_TASKS,
      data: { allTasks: allTasks.concat([createdTask]) }
    });
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
          <Mutation 
            mutation={CREATE_TASK}
            variables={{ name, description }}
            update={(cache, result) => this.updateLocalTasks(cache, result.data.createTask)}
          >
            {createTask => <button onClick={() => {createTask() }}>Submit</button>}
          </Mutation>
        </form>
      </div>
    )
  }
}

export default NewTask

// update = {(cache, { data: { createTask } }) => {
//   const { allTasks } = cache.readQuery<AllTasksI>({ query: ALL_TASKS })!;
//   cache.writeQuery({
//     query: ALL_TASKS,
//     data: { allTasks: allTasks.concat([createTask]) }
//   });
// }}