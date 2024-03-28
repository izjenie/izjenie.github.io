import { log, error } from 'node:console'

const runByContext = (context: string, logger: Function, data: any[]) => {
  const contexts = useRuntimeConfig().debugContexts || ''
  const isContextAvailable = typeof contexts === 'string' && contexts.length > 0
  const contextList = isContextAvailable ? contexts.split(',') : []

  if (contextList.includes(context)) {
    logger(`${context.toUpperCase()}>`, data.toString())
  }
}

export const __debug = (context: string, ...data: any[]) => runByContext(context, log, data)
export const __stdout = log
export const __stderr = error
