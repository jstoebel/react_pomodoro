export const TaskBase = {
  name: 'a name',
  description: 'a description'
}

export const Task = Object.assign(
  TaskBase,
  {
    id: 1,
    created_at: 'created_at',
    updated_at: 'updated_at',
    __typename: 'Task'
  }
)