'use strict'
const store = require('../store.js')
const gamesTemplate = require('./games-listing.handlebars')

const createGameSuccess = function (data) {
  $('#game-message').text('')
  $('#create-game input').val('')
  const createGameHtml = gamesTemplate({ games: data })
  $('.content').append(createGameHtml)
}
const createGameFailure = function () {
  $('#game-message').text('unable to create a game')
  $('#create-game input').val('')
}

const getAllGamesSuccess = function (data) {
  $('#game-message').text('')
  $('.content').html('')
  const getGamesHtml = gamesTemplate({ games: data.games })
  $('.content').append(getGamesHtml)
  $('#get-games input').val('')
  $('#hide-games-btn').removeClass('d-none')
}

// const getGameSuccess = function (data) {
//   $('#game-message').text('Name: ' + data.game.name + ' Comment: ' + data.game.comment)
//   $('#get-game input').val('')
// }
//
// const getGameFailure = function (data) {
//   $('#game-message').text('unable to show this game')
//   $('#get-game input').val('')
// }

const updateGameSuccess = function (data) {
  $('#update-game input').val('')
  $('#create-game').removeClass('d-none')
  $('#update-game').addClass('d-none')
  $('#game-message').text('')
}

const updateGameFailure = function (data) {
  $('#game-message').text('unable to update this game')
  $('#update-game input').val('')
  $('#create-game').removeClass('d-none')
  $('#update-game').addClass('d-none')
}

const deleteGameSuccess = function (data) {
  $('#delete-game input').val('')
  $('#create-game').removeClass('d-none')
}

const deleteGameFailure = function (data) {
  $('#game-message').text('unable to delete this game')
  $('#delete-game input').val('')
}

const clearGames = function () {
  $('.content').empty()
}

const updateClick = function () {
  $('#update-game').removeClass('d-none')
  $('#game-message').text('')
  // hide create and show
  $('#create-game').addClass('d-none')
  // populate inputs with current values
  $('#update-name').val(store.gameName)
  $('#update-comment').val(store.gameComment)
}

module.exports = {
  createGameSuccess,
  createGameFailure,
  getAllGamesSuccess,
  // getGameSuccess,
  // getGameFailure,
  updateGameSuccess,
  updateGameFailure,
  deleteGameSuccess,
  deleteGameFailure,
  clearGames,
  updateClick
}
