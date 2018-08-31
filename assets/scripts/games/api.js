'use strict'

const config = require('../config.js')
const store = require('../store.js')

const createGame = function (data) {
  console.log('api data', data)
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      ContentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  createGame
}
