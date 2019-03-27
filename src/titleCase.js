import { sentenceCase, uncurryN } from './index'

const titleCase = str =>
  str
    .split(' ')
    .map(sentenceCase)
    .join(' ')

export default uncurryN(1, titleCase)
