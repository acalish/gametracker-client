'use strict'
// const store = require('../store.js')
const gamesTemplate = require('./games-listing.handlebars')

const createGameSuccess = function (data) {
  $('#game-message').text('you created a game!')
  $('#create-game input').val('')
  // const createGameHtml = createGamesTemplate({ games: data })
  // $('.content').append(createGameHtml)
  // console.log(createGameHtml)
}
const createGameFailure = function () {
  $('#game-message').text('you did not create game')
  $('#create-game input').val('')
  console.log('game not created')
}

const getAllGamesSuccess = function (data) {
  console.log('here are all the games', data)
  const getGamesHtml = gamesTemplate({ games: data.games })
  $('.content').append(getGamesHtml)
}

const getGameSuccess = function (response) {
  $('#game-message').text('here is that one game ' + response)
  console.log('here is the one game', response)
}

const getGameFailure = function () {
  $('#game-message').text('you cannot see that game')
  console.log('getting a game did not work')
}

const updateGameSuccess = function (response) {
  $('#game-message').text('you updated a game!')
  $('#update-game input').val('')
  console.log('game is updated')
}

const updateGameFailure = function () {
  $('#game-message').text('you did not update a game!')
  $('#update-game input').val('')
  console.log('game is not updated')
}

const deleteGameSuccess = function () {
  $('#game-message').text('you deleted a game!')
  $('#delete-game input').val('')
  console.log('game is deleted')
}

const deleteGameFailure = function () {
  $('#game-message').text('you did not delete a game!')
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
