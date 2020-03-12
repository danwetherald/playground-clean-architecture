interface UserDepencies {
  Id: { gen: (len: number) => string }
  EmailValidator: { validate: (email: string) => boolean }
}

export default ({ Id, EmailValidator }: UserDepencies) => {
  type UserType = {
    id: string
    name: string
    email: string
  }

  return ({ id, name, email }: UserType) => {
    if (!id || id.length < 10) {
      throw new Error('User must contain a valid ID')
    }

    if (name.length < 3) {
      throw new Error('User must contain a valid name at least 3 characters long.')
    }

    if (!EmailValidator.validate(email)) {
      throw new Error('User must contain a valud email address.')
    }

    return Object.freeze({
      getId: () => id,
      getName: () => name,
      getEmail: () => email,
    })
  }
}
