import {
  reduce, assoc, keys, uncurryN,
} from 'ramda'

const renameKeys = keysMap =>
  obj =>
    reduce((acc, key) =>
      assoc(keysMap[key] || key, obj[key], acc), {}, keys(obj))

export default uncurryN(2, renameKeys)
