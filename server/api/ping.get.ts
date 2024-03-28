export default defineEventHandler(() => {
  __debug('ping', 'Ping-Pong!')
  __stdout('Standard log!')
  __stderr('Standard error!')

  return 'pong'
})
