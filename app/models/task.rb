class Task < ApplicationRecord
  has_many :pomodoros
  %w[name description].each do |column|
    validates column, presence: true
  end
end
