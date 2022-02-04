import { ILoggerType } from '@/services/Logger/LoggerTypes/ILoggerType.ts'
export class File implements ILoggerType {
  sendLogs (message: string) { console.log('file logs:', message) }
  sendWarn (message: string) { console.log('file warn:', message) }
  sendError (message: string) { console.log('file error:', message) }
}
