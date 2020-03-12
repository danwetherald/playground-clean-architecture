interface UserDepencies {
  EmailValidator: { validate: (email: string) => boolean }
}

export default ({ EmailValidator }: UserDepencies) => {
  type UserType = {
    name: string
    email: string
  }

  return ({ name, email }: UserType) => {
    if (name.length < 3) {
      throw new Error('User must contain a valid name at least 3 characters long.')
    }

    if (!EmailValidator.validate(email)) {
      throw new Error('User must contain a valud email address.')
    }

    return Object.freeze({
      getName: () => name,
      getEmail: () => email,
    })
  }
}
