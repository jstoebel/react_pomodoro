export interface PomodoroI {
  runningTask: Number
}

export interface PomodoroRecordI {
  id: Number,
  title: string,
  reflection: string,
  end_time: string,
  taskId: number, 
}