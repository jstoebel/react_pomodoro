Types::QueryType = GraphQL::ObjectType.define do
  name 'Query'

  field :allTasks, !types[Types::TaskType] do
    # resolve would be called in order to fetch data for that field
    resolve ->(_obj, _args, _ctx) { Task.all }
  end

  field :pomodoro, !types[Types::PomodoroType] do
    argument :id, types.Int
    resolve ->(_obj, args, _ctx) do
      Pomodoro.where id: args[:id]
    end
  end
end
