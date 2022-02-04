export interface ILoggerType {
  sendLogs(message: string): void
  sendWarn(message: string): void
  sendError(message: string): void
}
