import * as React from 'react';


const Task: React.SFC<{onAddTask: Function}> = ({onAddTask}) => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const { name, description } = event.target.elements;
    onAddTask({name:name.value, description:description.value})
  }
  
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
        <button type="submit"> Submit </button>
      </form>
    </div>
  )
}

export default Task
