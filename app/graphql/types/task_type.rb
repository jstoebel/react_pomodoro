Types::TaskType = GraphQL::ObjectType.define do
  name 'Task'

  # it has the following fields
  field :id, !types.ID
  field :name, !types.String
  field :description, !types.String
  field :created_at, !types.String
  field :updated_at, !types.String
end
