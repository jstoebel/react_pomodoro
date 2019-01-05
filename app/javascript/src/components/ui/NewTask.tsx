import * as React from 'react';
import { Mutation } from 'react-apollo';
import CREATE_TASK from '../../graphql/queries/createTask'

class NewTask extends React.Component<{}, {}> {
  constructor(s, p) {
    super(s, p)
    this.state = {
      name: '',
      description: '',
    }

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const {name, value} = event.target
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div>
        <form>
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
            {() => (
              <button onClick={`... you'll implement this 🔜`}>
                Submit
            </button>
            )}
          </Mutation>
        </form>
      </div>
    )
  }
}

const NewTaskq: React.SFC<{onAddTask: Function}> = ({onAddTask}) => {
  return (
    <div>
      <form
        onSubmit={handleFormSubmit}
      >
        <div>
          <label>name</label>
          <input
            name="name"
            type="text"
          />
        </div>

        <div>
          <label>description</label>
          <input
            name="description"
            type="text"
          />
        </div>
        <Mutation mutation={CREATE_TASK} variables={{ name, description }}>
          {() => (
            <button onClick={`... you'll implement this 🔜`}>
              Submit
            </button>
          )}
        </Mutation>
      </form>
    </div>
  )
}

export default NewTask

// const handleFormSubmit = (event) => {
//   event.preventDefault();
//   const { name, description } = event.target.elements;
//   onAddTask({ name: name.value, description: description.value })
// }