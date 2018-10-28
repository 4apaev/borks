const {
  chai, expect,
  util, inspect, trace,
  keys, entries, values,
  eq, chaiReq,
  log, sync, repo
} = require('../util/test')

const { server } = require('../server')
const http = chaiReq(server)

describe('Bork Router', () => {
  afterEach(sync)

  const body = {
    name: 'Shoshi',
    dob: new Date('2014/2/25'),
    breed: 'jack russell terrier'
  }

  const add = async () => {
    const re = await http.post('/').send(body)
    expect(re).to.have.status(200)
    expect(re.body.ok).to.equal(true)
    return re.body
  }
  const get = async () => {
    const re = await http.get('/')
    expect(re).to.have.status(200)
    expect(re.body.ok).to.equal(true)
    return re.body
  }

  it('GET / should return empty rows', async () => {
    const { data } = await get()
    expect(data).to.deep.equal({ count: 0, rows: [] })
  })

  it('POST / should add entry', async () => {
    const { data } = await add()
    expect(data).to.have.property('name', body.name)
    expect(data).to.have.property('breed', body.breed)
  })

  it('GET / should add and return rows', async () => {
    await add()
    const { data } = await get()
    trace(data)
    expect(data).to.have.property('count', 1)
    expect(data).to.have.property('rows').that.is.a('array').and.lengthOf(1)
  })


})
