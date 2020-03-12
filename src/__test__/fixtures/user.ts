import Id from '@utils/Id'
import faker from 'faker'

interface OverridesType {
  id?: string
  name?: string
  email?: string
}

export default (overrides?: OverridesType) => {
  const user = {
    id: Id.gen(10),
    name: faker.name.findName(),
    email: faker.internet.email(),
  }

  return {
    ...user,
    ...overrides,
  }
}
