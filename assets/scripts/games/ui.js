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

const getAllGamesSuccess = function (response) {
  console.log('here are all the games', response)
  // const getGamesHtml = getGamesTemplate({ games: data.games })
  // $('.content').append(getGamesHtml)
}

const getGameSuccess = function (response) {
  console.log('here is the one game', response)
}

const getGameFailure = function () {
  console.log('getting a game did not work')
}

module.exports = {
  createGameSuccess,
  createGameFailure,
  getAllGamesSuccess,
  getGameSuccess,
  getGameFailure
}
