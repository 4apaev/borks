const chai = require('chai')
const util = require('util')
chai.use(require('chai-http'))

const repo = require('../repository')

const { sync, log } = repo

const { inspect } = util
const { expect } = chai
const { trace } = console
const { keys, entries, values } = Object

inspect.defaultOptions.colors = true

const eq = (a, b) => {
  for (const [ k, v ] of Object.entries(a))
    expect(b).to.have.property(k, v)
}

const chaiReq = app => ({
  get(u) {
    return chai.request(app).get(u)
  },
  put(u) {
    return chai.request(app).put(u)
  },
  del(u) {
    return chai.request(app).del(u)
  },
  post(u) {
    return chai.request(app).post(u)
  }
})

module.exports = {
  chai, expect,
  util, inspect, trace,
  keys, entries, values,
  eq, chaiReq,
  log, sync, repo
}