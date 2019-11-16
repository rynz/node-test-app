const bootstrap = require('./bootstrap')

process.on('uncaughtException', err => {
  const stack = err.stack ? err.stack : String(err)
  const message = `Uncaught exception:\n${stack}`
  console.warn(message)
})

bootstrap().catch(err => {
  const stack = err.stack ? err.stack : String(err)
  const message = `Bootstrap exception:\n${stack}`
  console.error(message)
})
