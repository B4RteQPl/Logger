import { ILoggerType } from '@/services/Logger/LoggerTypes/ILoggerType.ts'
export class Crashlytics implements ILoggerType {
  sendLogs (message: string) { console.log('crashlytics logs:', message) }
  sendWarn (message: string) { console.log('crashlytics warn:', message) }
  sendError (message: string) { console.log('crashlytics error:', message) }
}
