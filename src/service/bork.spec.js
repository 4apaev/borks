const {
  inspect,
  expect,
  trace,
  sync,
  log,
  eq,
} = require('../util/test')

const Service = require('./bork')

describe('Borks Service', () => {

  afterEach(sync)

  it('should add', async () => {
    const body = {
      name: 'Shoshi',
      dob: new Date('2014/2/25'),
      breed: 'jack russell terrier'
    }
    const re = await Service.add(body)
    expect(re).to.have.property('id')
    expect(re).to.have.property('dob')
    expect(re).to.have.property('name', body.name)
    expect(re).to.have.property('breed', body.breed)
    expect(re.dob.toString()).to.equal(body.dob.toString())
  })

  // it('should fail', async () => {
  //   expect(async () => {
  //     await Service.add({ name: 2, description: true })
  //   }).to.throw()
  // })




})
