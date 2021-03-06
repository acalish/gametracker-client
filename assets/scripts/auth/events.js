'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')

const api = require('./api.js')
const ui = require('./ui.js')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function () {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

// const onSignOut = function () {
//   api.signOut()
//     .then(ui.signOutSuccess)
//     .catch(ui.signOutFailure)
// }

const onChangePwClick = function () {
  ui.changePwClick()
}

const onSignOut2 = function () {
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const addHandlers = function () {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  // $('#sign-out').on('submit', onSignOut)
  $('#change-pw').on('click', onChangePwClick)
  $('#sign-out2').on('click', onSignOut2)
  $('#sign-in-btn').on('click', ui.toggleSignIn)
  $('#sign-up-btn').on('click', ui.toggleSignUp)
}

module.exports = {
  addHandlers
}
