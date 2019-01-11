import { Task as sampleTask} from './fixtures'

export const schema = `
  type Task {
    id: Int!
    name: String!
    description: String!
    created_at: String!
    updated_at: String!
  }

  type Query {
    allTasks: [Task]
  }

  type Mutation {
    createTask (
      name: String!, description: String!
    ): Task 
  }
`;

export const resolvers = {
  Query: {
    allTasks: () => ({allTasks: [sampleTask, sampleTask]}),
  },
  Mutation: {
    createTask: (name, description) => sampleTask,
  },
};