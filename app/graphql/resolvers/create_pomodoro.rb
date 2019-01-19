class Resolvers::CreatePomodoro < GraphQL::Function
  # arguments passed as "args"
  argument :title, !types.String
  argument :reflection, types.String
  argument :end_time, !types.String
  argument :task_id, !types.Int
  # return type from the mutation
  type Types::PomodoroType

  # the mutation method
  # _obj - is parent object, which in this case is nil
  # args - are the arguments passed
  # _ctx - is the GraphQL context
  def call(_obj, args, _ctx)
    Pomodoro.create!(
      title: args[:title],
      reflection: args[:reflection],
      end_time: args[:end_time],
      task_id: args[:task_id]
    )
  end
end
