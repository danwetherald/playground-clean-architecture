import nanoid from 'nanoid'

export default Object.freeze({
  gen: (length: number) => nanoid(length),
})
