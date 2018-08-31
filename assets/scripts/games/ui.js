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

const getAllGamesSuccess = function (data) {
  console.log('here are all the games', data)
  // const getGamesHtml = getGamesTemplate({ games: data.games })
  // $('.content').append(getGamesHtml)
}

module.exports = {
  createGameSuccess,
  createGameFailure,
  getAllGamesSuccess
}
