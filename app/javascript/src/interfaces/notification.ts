export interface NotificationI {
  message: string;
  level: 'success' | 'error' | 'info' | 'warning';
  linkPath: string;
}