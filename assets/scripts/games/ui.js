'use strict'
// const store = require('../store.js')
const gamesTemplate = require('./games-listing.handlebars')

const createGameSuccess = function (data) {
  console.log('game created')
  $('#create-game input').val('')
  // const createGameHtml = createGamesTemplate({ games: data })
  // $('.content').append(createGameHtml)
  // console.log(createGameHtml)
}
const createGameFailure = function () {
  $('#create-game input').val('')
  console.log('game not created')
}

const getAllGamesSuccess = function (data) {
  console.log('here are all the games', data)
  const getGamesHtml = gamesTemplate({ games: data.games })
  $('.content').append(getGamesHtml)
}

const getGameSuccess = function (response) {
  console.log('here is the one game', response)
}

const getGameFailure = function () {
  console.log('getting a game did not work')
}

const updateGameSuccess = function (response) {
  $('#update-game input').val('')
  console.log('game is updated')
}

const updateGameFailure = function () {
  $('#update-game input').val('')
  console.log('game is not updated')
}

const deleteGameSuccess = function () {
  $('#delete-game input').val('')
  console.log('game is deleted')
}

const deleteGameFailure = function () {
  $('#delete-game input').val('')
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
