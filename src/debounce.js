import { uncurryN, apply } from './index'

/**
 * Debounce
 *
 * @param  timeMs {Number} Debounce timeout
 * @param  fn {Function} Function to debounce
 *
 * @return {Number} timeout
 * @example
 *
 *		const say = (x) => console.log(x)
 *		const debouncedSay = debounce(1000, say)();
 *
 *		debouncedSay("1")
 *		debouncedSay("2")
 *		debouncedSay("3")
 *
 */
const debounce = timeMs =>
  fn =>
    () => {
      let timeout

      return (...args) => {
        const later = () => {
          timeout = null

          apply(fn, args)
        }

        const callNow = !timeout

        clearTimeout(timeout)
        timeout = setTimeout(later, timeMs)

        if (callNow) apply(fn, args)

        return timeout
      }
    }

export default uncurryN(2, debounce)