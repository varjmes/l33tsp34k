'use strict'

module.exports = leetspeak

var charToLeet = require('./char-to-leet.json')

/**
 * Returns a string converted into l33tsp34k
 * @param string
 */

function convertToLeet (char) {
  let convertedChar = charToLeet[char]
  if (convertedChar) {
    return convertedChar
  }

  return char
}

function leetspeak (input) {
  let stringInput = input.toString()
  let map = Array.prototype.map

  return map.call(stringInput, convertToLeet).join('')
}
