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

const updateGameSuccess = function (response) {
  console.log('game is updated')
}

const updateGameFailure = function () {
  console.log('game is not updated')
}

const deleteGameSuccess = function () {
  console.log('game is deleted')
}

const deleteGameFailure = function () {
  console.log('game not deleted')
}

module.exports = {
  createGameSuccess,
  createGameFailure,
  getAllGamesSuccess,
  getGameSuccess,
  getGameFailure,
  updateGameSuccess,
  updateGameFailure,
  deleteGameSuccess,
  deleteGameFailure
}
