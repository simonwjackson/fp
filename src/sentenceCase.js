import { uncurryN } from './index'

const sentenceCase = word =>
  [
    word[0].toUpperCase(),
    ...word.slice(1),
  ].join('')

export default uncurryN(1, sentenceCase)
