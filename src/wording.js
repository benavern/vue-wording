/**
 * Very simple Vue plugin for translations
 * Made by Benjamin Caradeuc <bencrdc@gmail.com>
 */
import _get from 'lodash.get'
/**
 * Replaces parts of the string by configured ones
 * @param {String} str the string to be computed
 * @param {Object} opts the strings to be replaced with
 */
function replaceTemplateStrings (str = '', opts = {}) {
  // for every string options
  Object.keys(opts).forEach((opt) => {
    // if it is suitable for replacement
    if (typeof opts[opt] === 'string' || typeof opts[opt] === 'number') {
      // create the replace regex matching the patern #{...}
      const r = new RegExp(`#{${opt}}`, 'g')
      // replace all ocurences of that patern with the corresponding value
      str = str.replace(r, opts[opt])
    }
  })
  // delete the template parts with no wording feeting
  return str.replace(/#{\w*}/g, '')
}

/**
 * Process strings, objects & array values
 * @param {*} arg wording value to be processed
 * @param {Object} opts the strings to be replaced with
 */
function processwording (arg, opts) {
  // if the value is a string, return the compiled one
  if (typeof arg === 'string') return replaceTemplateStrings(arg, opts)
  if (typeof arg === 'object') {
    if (arg instanceof Array) {
      // if the value is an array, process each value
      return arg.map(item => processwording(item, opts))
    } else {
      // if the value is an object, process each value by key
      Object.keys(arg).forEach(key => { arg[key] = processwording(arg[key], opts) })
      return arg
    }
  }
  // if none of these conditions, just return the value
  return arg
}

const WordingPlugin = {
  /**
   * This is how we declare a Vue plugin
   * @param {*} Vue The vue instance
   * @param {Object} Options where the plugin options are passed
   */
  install (Vue, { lang = 'en', wording = {} }) {
    if (!wording[lang] === {}) console.warn('[WORDING PLUGIN] No wording provided')
    if (!wording[lang]) console.warn('[WORDING PLUGIN] this lang is not supported')
    /**
     * Methode that processes the strings in the Vue components
     * @param {String} key The key to find in the wording
     * @param {Object} opts the configurable strings to replace
     */
    Vue.prototype.$t = function (key, opts) {
      try {
        const wordingCopy = JSON.parse(JSON.stringify(wording))
        return processwording(_get(wordingCopy, `${lang}.${key}`, key), opts)
      } catch (e) {
        console.error(e)
      }
    }
  }
}

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(WordingPlugin)
}

export default WordingPlugin
