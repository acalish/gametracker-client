'use strict'
const store = require('../store.js')
const gamesTemplate = require('./games-listing.handlebars')

const createGameSuccess = function (data) {
  $('#game-message').text('')
  $('#create-game-form input').val('')
  $('#create-game-form textarea').val('')
  const createGameHtml = gamesTemplate({ games: data })
  $('.content').append(createGameHtml)
  $('#auth-message').text('')
}
const createGameFailure = function () {
  $('#game-message').text('unable to create a game')
  $('#create-game-form input').val('')
  $('#create-game-form textarea').val('')
  $('#auth-message').text('')
}

const getAllGamesSuccess = function (data) {
  $('#game-message').text('')
  $('#create-game-form input').val('')
  $('.content').html('')
  const getGamesHtml = gamesTemplate({ games: data.games })
  $('.content').append(getGamesHtml)
  $('#get-games input').val('')
  $('#content').removeClass('d-none')
  $('#hide-games-btn').removeClass('d-none')
  $('#auth-message').text('')
  $('#change-password').addClass('d-none')
  $('#update-game').addClass('d-none')
}

const updateGameSuccess = function (data) {
  $('#create-game-form input').val('')
  $('#update-game input').val('')
  $('#create-game-form').removeClass('d-none')
  $('#update-game').addClass('d-none')
  $('#game-message').text('')
  $('#auth-message').text('')
}

const updateGameFailure = function (data) {
  $('#create-game-form input').val('')
  $('#game-message').text('unable to update this game')
  $('#update-game input').val('')
  $('#create-game-form').removeClass('d-none')
  $('#update-game').addClass('d-none')
  $('#auth-message').text('')
}

const deleteGameSuccess = function (data) {
  $('#create-game-form input').val('')
  $('#delete-game input').val('')
  $('#create-game-form').removeClass('d-none')
  $('#auth-message').text('')
  $('#update-game').addClass('d-none')
}

const deleteGameFailure = function (data) {
  $('#game-message').text('unable to delete this game')
  $('#delete-game input').val('')
  $('#auth-message').text('')
}

const clearGames = function () {
  $('#create-game-form input').val('')
  $('.content').empty()
  $('#auth-message').text('')
  $('#change-password').addClass('d-none')
  $('#update-game').addClass('d-none')
  $('#create-game-form').removeClass('d-none')
}

const updateClick = function () {
  $('#update-game').removeClass('d-none')
  $('#create-game-form input').val('')
  $('#game-message').text('')
  // hide create and show
  $('#create-game-form').addClass('d-none')
  // populate inputs with current values
  $('#update-name').val(store.gameName)
  $('#update-comment').val(store.gameComment)
  $('#auth-message').text('')
}

module.exports = {
  createGameSuccess,
  createGameFailure,
  getAllGamesSuccess,
  updateGameSuccess,
  updateGameFailure,
  deleteGameSuccess,
  deleteGameFailure,
  clearGames,
  updateClick
}
