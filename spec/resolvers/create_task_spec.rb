require 'rails_helper'

describe Resolvers::CreateTask do
  it 'creates a new task' do
    args = {
      name: 'a name',
      description: 'a description'
    }
    expect(Task).to receive(:create!).with(args)
    Resolvers::CreateTask.new.call(nil, args, {})
  end
end
