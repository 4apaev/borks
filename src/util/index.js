exports.echo = x => x
exports.wait = async x => await x
exports.sleep = (...a) => new Promise(done => setTimeout(done, ...a))

exports.delay = (fn, ms, ...a) =>
  new Promise((done, fail) => setTimeout(() => {
    try {
      const re = cb(...a)
      done(re)
    } catch(e) {
      fail(e)
    }
  }, ms))

exports.pluck = (a, b) => a.map(o => o[ b ])
exports.random = (min, max) => min + (0|Math.random() * (max-min+1))


exports.compose = (f, ...fns) => {
  const story = fns.length
    ? fns.reduce((prev, next) => (...a) => prev(next(...a)), f)
    : f
  return story
}



