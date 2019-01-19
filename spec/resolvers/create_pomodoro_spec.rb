require 'rails_helper'

describe Resolvers::CreatePomodoro do
  it 'creates a new pomodoro' do
    args = {
      title: 'a title',
      reflection: 'a reflection',
      end_time: '2019-01-16T18:50:13-05:00',
      task_id: 1
    }
    expect(Pomodoro).to receive(:create!).with(args)
    Resolvers::CreatePomodoro.new.call(nil, args, {})
  end
end
