export interface TaskBaseI {
  name: String,
  description: String,
}

export interface TaskI extends TaskBaseI {
  id: Number,
  created_at: String,
  updated_at: String
}