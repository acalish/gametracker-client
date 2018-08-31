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

const addHandlers = function () {
  $('#create-game').on('submit', onCreateGame)
  $('#get-all-games').on('submit', onGetGames)
}

module.exports = {
  addHandlers
}