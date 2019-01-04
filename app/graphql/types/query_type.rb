Types::QueryType = GraphQL::ObjectType.define do
  name 'Query'

  field :allTasks, !types[Types::TaskType] do
    # resolve would be called in order to fetch data for that field
    resolve ->(_obj, _args, _ctx) { Task.all }
  end
end
