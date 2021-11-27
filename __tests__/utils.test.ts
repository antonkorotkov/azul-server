import { getEventName } from '../src/common/utils'

describe('getEventName', () => {
  it('return correct event name', () => {
    expect(getEventName('a', 'b')).toBe('a.b')
  })
})
