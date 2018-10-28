const Fs = require('fs')
const cwd = process.cwd()
const access = Fs.createWriteStream(`${ cwd }/access.log`, { flags : 'w' })
const error = Fs.createWriteStream(`${ cwd }/error.log`, { flags : 'w' })
const { stdout, stderr } = process


stdout.pipe(access)
stderr.pipe(error)
