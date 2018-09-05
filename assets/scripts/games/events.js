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

const onGetGames = function (event) {
  event.preventDefault()
  api.getAllGames()
    .then(ui.getAllGamesSuccess)
    .catch(ui.getAllGamesFailure)
}

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
  api.update2(data)
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

// const onUpdate2 = function (event) {
//   event.preventDefault()
//   const gameId = $(event.target).closest('section').data('id')
//   console.log('clicked update for', gameId)
//   store.gameId = gameId
//   api.update2(store.gameId)
//     .then(ui.updateGamesSuccess)
//     .catch(ui.updateGameFailure)
// }

const onUpdate2 = function (event) {
  event.preventDefault()
  const gameId = $(event.target).closest('section').data('id')
  store.gameId = gameId
  const gameName = $(event.target).closest('section').data('name')
  store.gameName = gameName
  const gameComment = $(event.target).closest('section').data('comment')
  store.gameComment = gameComment
  ui.update2()
}

const onHideGames = function (event) {
  event.preventDefault()
  ui.clearGames()
}

const addHandlers = function () {
  $('#create-game').on('submit', onCreateGame)
  $('#get-all-games').on('submit', onGetGames)
  $('#update-game').on('submit', onUpdateGame)
  $('.content').on('click', '#remove-btn', onDeleteGame)
  $('.content').on('click', '#update-btn', onUpdate2)
  $('#hide-games-btn').on('click', onHideGames)
}

module.exports = {
  addHandlers
}
