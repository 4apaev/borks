const Service = require('../service')
const Router = require('koa-router')()
const Body = require('koa-body')({ json: true })


Router.get('/', async ctx => {
  const data = await Service.get(ctx.query)
  ctx.body = { ok: true, data }
})


Router.del('/', async ctx => {
  const data = await Service.del(ctx.query)
  ctx.body = { ok: true, data }
})


Router.put('/', Body, async ctx => {
  const data = await Service.put(ctx.query, ctx.request.body)
  ctx.body = { ok: true, data }
})


Router.post('/', Body, async ctx => {
  const data = await Service.add(ctx.request.body)
  ctx.body = { ok: true, data }
})


module.exports = Router