import { ILoggerType } from '@/services/Logger/LoggerTypes/ILoggerType.ts'
export class Slack implements ILoggerType {
  sendLogs (message: string) { console.log('slack logs:', message) }
  sendWarn (message: string) { console.log('slack warn:', message) }
  sendError (message: string) { console.log('slack error:', message) }
}
