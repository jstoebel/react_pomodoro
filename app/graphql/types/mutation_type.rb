Types::MutationType = GraphQL::ObjectType.define do
  name 'Mutation'

  field :createTask, function: Resolvers::CreateTask.new
  field :createPomodoro, function: Resolvers::CreatePomodoro.new
  field :updatePomodoro, function: Resolvers::UpdatePomodoro.new
end
