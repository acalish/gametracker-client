'use strict'
// const store = require('../store.js')
const gamesTemplate = require('./games-listing.handlebars')

const createGameSuccess = function (data) {
  $('#game-message').text('')
  $('#no-game-message').text('')
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
  console.log('data.games is', data.games)
  $('.content').append(getGamesHtml)
  $('#get-games input').val('')
  $('#clear-games-btn').removeClass('d-none')
}

const getGameSuccess = function (data) {
  $('#game-message').text('Name: ' + data.game.name + ' Comment: ' + data.game.comment)
  $('#get-game input').val('')
}

const getGameFailure = function (data) {
  $('#game-message').text('unable to show this game')
  $('#get-game input').val('')
}

const updateGameSuccess = function (data) {
  // $('#game-message').text('Game updated: ' + data.game.name + ' Comment: ' + data.game.comment)
  $('#update-game input').val('')
}

const updateGameFailure = function (data) {
  $('#game-message').text('unable to update this game')
  $('#update-game input').val('')
}

const deleteGameSuccess = function (data) {
  $('#game-message').text('Game deleted')
  $('#delete-game input').val('')
}

const deleteGameFailure = function (data) {
  $('#game-message').text('unable to delete this game')
  $('#delete-game input').val('')
}

const clearGames = function () {
  $('.content').empty()
}

const update2 = function () {
  $('#update-game').removeClass('d-none')
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
  deleteGameFailure,
  clearGames,
  update2
}
