import { ILoggerType } from '@/services/Logger/LoggerTypes/ILoggerType.ts'
export class Mail implements ILoggerType {
  sendLogs (message: string) { console.log('mail logs:', message) }
  sendWarn (message: string) { console.log('mail warn:', message) }
  sendError (message: string) { console.log('mail error:', message) }
}
