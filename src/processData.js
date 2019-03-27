import {
  isFunction, isArray, isString, path, fromStringPath, uncurryN,
} from './index'

const processData = (arg, data) => {
  if (isFunction(arg)) return arg(data)
  if (isArray(arg)) return path(arg, data)
  if (isString(arg)) return fromStringPath(arg, data)
}

export default uncurryN(2, processData)
