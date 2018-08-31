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
    .catch(ui.updateGameFailure)
}

const addHandlers = function () {
  $('#create-game').on('submit', onCreateGame)
  $('#get-all-games').on('submit', onGetGames)
  $('#get-game').on('submit', onGetGame)
  $('#update-game').on('submit', onUpdateGame)
}

module.exports = {
  addHandlers
}
