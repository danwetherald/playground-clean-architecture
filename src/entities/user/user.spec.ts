import makeFakeUser from '@fixtures/user'
import makeUser from './'

describe('User', () => {
  it('must have a valid id', () => {
    const fakeUser = makeFakeUser({ id: 'fake' })
    expect(() => makeUser(fakeUser)).toThrow('User must contain a valid ID')
  })

  it('accepts valid id', () => {
    const fakeUser = makeFakeUser()
    expect(() => makeUser(fakeUser)).not.toThrow()
  })

  it('can retreive id', () => {
    const fakeUser = makeFakeUser()
    const user = makeUser(fakeUser)

    expect(user.getId()).toBeDefined()
  })

  it('must have a valid name', () => {
    const fakeUser = makeFakeUser({ name: 'Jo' })
    expect(() => makeUser(fakeUser)).toThrow('User must contain a valid name at least 3 characters long.')
  })

  it('accepts valid name', () => {
    const fakeUser = makeFakeUser({ name: 'John Doe' })
    expect(() => makeUser(fakeUser)).not.toThrow()
  })

  it('can retreive name', () => {
    const fakeUser = makeFakeUser()
    const user = makeUser(fakeUser)

    expect(user.getName()).toBeDefined()
  })

  it('must have a valid email', () => {
    const fakeUser = makeFakeUser({ email: 'john.doe' })
    expect(() => makeUser(fakeUser)).toThrow('User must contain a valud email address.')
  })

  it('accepts valid email', () => {
    const fakeUser = makeFakeUser({ email: 'john.doe@example.com' })
    expect(() => makeUser(fakeUser)).not.toThrow()
  })

  it('can retreive email', () => {
    const fakeUser = makeFakeUser()
    const user = makeUser(fakeUser)

    expect(user.getEmail()).toBeDefined()
  })
})
