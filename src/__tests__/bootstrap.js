const bootstrap = require('../bootstrap')

test('returns protocol', async () => {
  expect.assertions(1)
  const data = await bootstrap()
  expect(data).toBe('Test Protocol')
})
