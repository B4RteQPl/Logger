import { Slack } from '@/services/Logger/LoggerTypes/Slack/index.ts'
import { File } from '@/services/Logger/LoggerTypes/File/index.ts'
import { Crashlytics } from '@/services/Logger/LoggerTypes/Crashlytics/index.ts'
import { Mail } from '@/services/Logger/LoggerTypes/Mail/index.ts'
import { ILoggerType } from '@/services/Logger/LoggerTypes/ILoggerType'

export class Loggers implements ILoggerType {
  logNotificationQueue = [File]
  warnNotificationQueue = [Slack, File]
  errorNotificationQueue = [Slack, File, Crashlytics, Mail]

  sendLogs (message: string) {
    this.logNotificationQueue.forEach((Logger) => (new Logger()).sendLogs(message))
  }

  sendWarn (message: string) {
    this.warnNotificationQueue.forEach((Logger) => (new Logger()).sendWarn(message))
  }

  sendError (message: string) {
    this.errorNotificationQueue.forEach((Logger) => (new Logger()).sendError(message))
  }
}
