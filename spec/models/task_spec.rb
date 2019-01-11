require 'rails_helper'

RSpec.describe Task, type: :model do
  describe 'validations' do
    before(:each) do
      @task = Task.new
      @task.valid?
    end
    %i[name description].each do |column|
      it "requires #{column}" do
        expect(@task.errors.messages[column]).to eq(['can\'t be blank'])
      end
    end
  end
end
