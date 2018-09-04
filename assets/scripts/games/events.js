'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')

const api = require('./api.js')
const ui = require('./ui.js')

const onCreateGame = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('data from the form:', data)
  api.createGame(data)
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}

const onGetGames = function (event) {
  event.preventDefault()
  api.getAllGames()
    .then(ui.getAllGamesSuccess)
    .catch(ui.getAllGamesFailure)
}

const onGetGame = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.getGame(data)
    .then(ui.getGameSuccess)
    .catch(ui.getGameFailure)
}

const onUpdateGame = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.updateGame(data)
    .then(ui.updateGameSuccess)
    .then(() => onGetGames(event))
    .catch(ui.updateGameFailure)
}

const onDeleteGame = function (event) {
  event.preventDefault()
  const gameId = $(event.target).closest('section').data('id')
  api.deleteGame(gameId)
    .then(() => onGetGames(event))
    .catch(ui.deleteGameFailure)
}

const onUpdate2 = function (event) {
  event.preventDefault()
  const gameId = $(event.target).closest('section').data('id')
  console.log('clicked update for', gameId)
}

const addHandlers = function () {
  $('#create-game').on('submit', onCreateGame)
  $('#get-all-games').on('submit', onGetGames)
  $('#get-game').on('submit', onGetGame)
  $('#update-game').on('submit', onUpdateGame)
  $('.content').on('click', '#remove-btn', onDeleteGame)
  $('.content').on('click', '#update-btn', onUpdate2)
}

module.exports = {
  addHandlers
}
