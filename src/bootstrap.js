const { str } = require('@rynz/node-test-protocol')

module.exports = () => {
  const data = str()
  return Promise.resolve(data)
}
