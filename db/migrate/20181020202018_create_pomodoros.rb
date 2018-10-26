class CreatePomodoros < ActiveRecord::Migration[5.1]
  def change
    create_table :pomodoros do |t|
      t.string :title
      t.text :description
      t.datetime :start_time
      t.datetime :end_time
      t.references :task
      t.timestamps
    end
  end
end
