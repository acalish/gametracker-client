'use strict'
const store = require('../store.js')

const signUpSuccess = function () {
  $('#auth-message').text('Sign up successful, please sign in')
  $('#sign-up input').val('')
}
const signUpFailure = function () {
  $('#auth-message').text('Sign up failed, please check that your passwords match')
  $('#sign-up input').val('')
}

const signInSuccess = function (response) {
  $('#auth-message').text('Welcome back!')
  store.user = response.user
  $('#auth-message').text('Welcome back, ' + store.user.email.substr(0, store.user.email.indexOf('@')))
  $('#sign-in input').val('')
  $('#change-password').removeClass('d-none')
  $('#sign-out').removeClass('d-none')
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#game-message').removeClass('d-none')
  $('#game').removeClass('d-none')
}

const signInFailure = function () {
  $('#auth-message').text('Sign in failed, check that your email and password are correct')
  $('#sign-in input').val('')
}

const changePasswordSuccess = function () {
  $('#auth-message').text('Password changed')
  $('#change-password input').val('')
}

const changePasswordFailure = function () {
  $('#auth-message').text('Password not changed')
  $('#change-password input').val('')
}

const signOutSuccess = function () {
  $('#auth-message').text('Sign out successful')
  $('#sign-out input').val('')
}

const signOutFailure = function () {
  $('#auth-message').text('Sign out failed')
  $('#sign-out input').val('')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
