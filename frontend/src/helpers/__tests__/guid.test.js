import guid from '../guid'

describe('guid()', () => {
  it('should return a guid-compatible string', () => {
    const testGuid = guid()

    expect(
      /[a-f0-9]{8}(?:-[a-f0-9]{4}){3}-[a-f0-9]{12}/i.test(testGuid)
    ).toBe(true)
  })
})
