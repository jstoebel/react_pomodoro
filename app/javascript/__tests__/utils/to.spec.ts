import to from '../../src/utils/to'

const data = jest.fn()
describe('to', () => {
  it('returns data on successful promise resolution', async () => {
    const goodOne = new Promise((resolve) => {
      resolve(data)
    })
    const result = await to(goodOne)
    expect(result).toEqual({err: null, data: data})
  })

  it('returns error on caught error', async () => {
    const badOne = new Promise((_, reject) => {
      reject(data)
    })

    const result = await to(badOne)
    expect(result).toEqual({ err: data, data: null })
  })
})