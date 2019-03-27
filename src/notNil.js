import { complement, isNil, uncurryN } from './index'

const notNil = complement(isNil)

export default uncurryN(1, notNil)
