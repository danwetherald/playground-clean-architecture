import Id from '@utils/Id'
import EmailValidator from 'email-validator'

import buildMakeUser from './user'

const makeUser = buildMakeUser({ Id, EmailValidator })

export default makeUser
