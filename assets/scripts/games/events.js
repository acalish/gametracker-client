'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')

const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store.js')

const onCreateGame = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createGame(data)
    .then(ui.createGameSuccess)
    .then(() => onGetGames(event))
    .catch(ui.createGameFailure)
}

// const onGetGames = function (event) {
//   event.preventDefault()
//   api.getAllGames()
//     .then(ui.getAllGamesSuccess)
//     .catch(ui.getAllGamesFailure)
// }

// const onGetGame = function (event) {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   api.getGame(data)
//     .then(ui.getGameSuccess)
//     .catch(ui.getGameFailure)
// }

const onUpdateGame = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.updateGame(data)
    .then(() => onGetGames(event))
    .then(ui.updateGameSuccess)
    .catch(ui.updateGameFailure)
}

const onDeleteGame = function (event) {
  event.preventDefault()
  const gameId = $(event.target).closest('section').data('id')
  api.deleteGame(gameId)
    .then(() => onGetGames(event))
    .catch(ui.deleteGameFailure)
}

const onUpdateClick = function (event) {
  event.preventDefault()
  const gameId = $(event.target).closest('section').data('id')
  store.gameId = gameId
  const gameName = $(event.target).closest('section').data('name')
  store.gameName = gameName
  const gameComment = $(event.target).closest('section').data('comment')
  store.gameComment = gameComment
  ui.updateClick()
}

const onHideGames = function (event) {
  event.preventDefault()
  ui.clearGames()
}

const onGetGames = function (event) {
  console.log('show clicked')
  // event.preventDefault()
  api.getAllGames()
    .then(ui.getAllGamesSuccess)
    .catch(ui.getAllGamesFailure)
}

const addHandlers = function () {
  $('#create-game').on('submit', onCreateGame)
  // $('#get-all-games').on('submit', onGetGames)
  $('#update-game').on('submit', onUpdateGame)
  $('.content').on('click', '#remove-btn', onDeleteGame)
  $('.content').on('click', '#update-btn', onUpdateClick)
  $('#hide-games-btn').on('click', onHideGames)
  $('#show-games').on('click', onGetGames)
}

module.exports = {
  addHandlers
}
