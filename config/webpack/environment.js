const { environment } = require('@rails/webpacker')
const typescript =  require('./loaders/typescript')

environment.loaders.append('typescript', typescript)
environment.loaders.append('mp3', {
  test: /\.mp3$/,
  use: 'file-loader'
})
module.exports = environment
