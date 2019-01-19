Types::PomodoroType = GraphQL::ObjectType.define do
  name 'Pomodoro'

  field :id, !types.ID
  field :title, !types.String
  field :reflection, types.String
  field :start_time, types.String
  field :end_time, !types.String
  field :task_id, !types.Int
  field :created_at, !types.String
  field :updated_at, !types.String
end
