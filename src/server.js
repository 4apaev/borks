const { PORT, log } = require('./config')
const Koa = require('koa')
const router = require('./routers')
const app = new Koa()

app.use(async (ctx, next) => {
  const start = new Date
  try {
    await next()
  } catch (e) {
    const { status=500, message } = e
    ctx.status = status
    ctx.body = { ok: false, message }
    ctx.app.emit('error', e, ctx)
  } finally {
    log(ctx.status, ctx.method, ctx.path, new Date - start)
  }
})

app.use(router.routes())

app.on('error', (e, ctx) => {
  log('\n\n==== FAIL ====')
  log(e)
  log('\n\n')
})

exports.app = app
exports.server = app.listen(PORT, () => {
  log('listening on localhost:' + PORT)
})


