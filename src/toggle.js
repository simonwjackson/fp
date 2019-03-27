import {
  ifElse,
  equals,
  always,
  uncurryN,
} from 'ramda'

const toggle = on =>
  off =>
    ifElse(equals(true), always(on), always(off))

export default uncurryN(2, toggle)
