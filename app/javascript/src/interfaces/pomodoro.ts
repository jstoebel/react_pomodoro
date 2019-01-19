export interface PomodoroI {
  runningTask: Number
}

export interface PomodoroRecordI {
  id: Number,
  title: string,
  reflection: string,
  endTime: string,
  taskId: number, 
}