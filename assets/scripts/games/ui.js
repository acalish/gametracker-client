'use strict'
// const store = require('../store.js')

const createGameSuccess = function () {
  console.log('created a game...I think')
}
const createGameFailure = function () {
  console.log('game not created')
}

module.exports = {
  createGameSuccess,
  createGameFailure
}
