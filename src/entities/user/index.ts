import EmailValidator from 'email-validator'

import buildMakeUser from './user'

const makeUser = buildMakeUser({ EmailValidator })

export default makeUser
