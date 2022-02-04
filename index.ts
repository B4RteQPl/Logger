import { Loggers } from '@/services/Logger/Loggers.ts'

interface ILogger {
  log(message: string): void
  warn(message: string): void
  error(message: string): void
}

class Logger implements ILogger {
  log (message: string) {
    (new Loggers()).sendLogs(message)
  }

  warn (message: string) {
    (new Loggers()).sendWarn(message)
  }

  error (message: string) {
    (new Loggers()).sendError(message)
  }
}

const logger = new Logger()

export { logger }
