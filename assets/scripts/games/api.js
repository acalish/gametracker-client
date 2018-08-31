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

const getAllGames = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET'
  })
}

module.exports = {
  createGame,
  getAllGames
}
