import { ILoggerType } from '@/services/Logger/LoggerTypes/ILoggerType.ts'
export class Console implements ILoggerType {
  sendLogs (message: string) { console.log('console log:', message) }
  sendWarn (message: string) { console.warn('console warn:', message) }
  sendError (message: string) { console.error('console error:', message) }
}
