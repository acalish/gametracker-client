'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')

const api = require('./api.js')
const ui = require('./ui.js')

const onCreateGame = function (event) {
  event.preventDefault()
  // console.log('submitted the form')
  // console.log('getFormFields', getFormFields)
  const data = getFormFields(event.target)
  console.log('data from the form:', data)
  api.createGame(data)
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}

const addHandlers = function () {
  $('#create-game').on('submit', onCreateGame)
}

module.exports = {
  addHandlers
}
