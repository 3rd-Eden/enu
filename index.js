'use strict';

/**
 * Extract the enumerable and non enumerable properties from a given object and
 * return a catogorized object.
 *
 * @param {Object} obj Object with enumerable and non enumerable properties.
 * @returns {Object}
 * @api public
 */
module.exports = function enumerables(obj) {
  /**
   * Simple helper function that will get the key->value combination from the
   * original supplied object and puts it in a new object.
   *
   * @param {Object} store Object where we store new things in.
   * @param {String} key The key we need to store.
   * @returns {Object} Store.
   * @api private
   */
  function get(store, key) {
    store[key] = obj[key];
    return store;
  }

  var enukeys = Object.keys(obj);
  var nonkeys = Object.getOwnPropertyNames(obj).filter(function filter(key) {
    return !~enukeys.indexOf(key);
  });

  return {
    non: nonkeys.reduce(get, {}),
    enu: enukeys.reduce(get, {}),
    nonkeys: nonkeys,
    enukeys: enukeys
  };
};
