import faker from 'faker'

interface OverridesType {
  name?: string
  email?: string
}

export default (overrides?: OverridesType) => {
  const user = {
    name: faker.name.findName(),
    email: faker.internet.email(),
  }

  return {
    ...user,
    ...overrides,
  }
}
