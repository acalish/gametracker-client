'use strict'
// const store = require('../store.js')
const createGamesTemplate = require('./games-listing.handlebars')

const createGameSuccess = function (data) {
  console.log('game created')
  const createGameHtml = createGamesTemplate({ games: data })
  $('.content').append(createGameHtml)
  console.log(createGameHtml)
}
const createGameFailure = function () {
  console.log('game not created')
}

module.exports = {
  createGameSuccess,
  createGameFailure
}
