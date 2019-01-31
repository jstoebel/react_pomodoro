class Resolvers::UpdatePomodoro < GraphQL::Function
  # arguments passed as "args"
  argument :id, !types.ID
  argument :title, types.String
  argument :reflection, types.String
  argument :end_time, types.String
  # return type from the mutation
  type Types::PomodoroType

  # the mutation method
  # _obj - is parent object, which in this case is nil
  # args - are the arguments passed
  # _ctx - is the GraphQL context
  def call(_obj, args, _ctx)
    pomodoro = Pomodoro.find args[:id]

    pomodoro.update_attributes(
      title: args[:title],
      reflection: args[:reflection],
      end_time: args[:end_time]
    )
    pomodoro
  end
end
