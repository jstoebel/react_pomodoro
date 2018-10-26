class CreateTasks < ActiveRecord::Migration[5.1]
  def change
    create_table :tasks do |t|
      t.string :name
      t.string :description
      t.timestamps
    end

    add_foreign_key :pomodoros, :tasks
  end
end
