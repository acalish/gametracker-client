'use strict'
const store = require('../store.js')

const signUpSuccess = function () {
  $('#auth-message').text('Sign up successful, please sign in')
  $('#sign-up input').val('')
  $('.sign-up').addClass('d-none')
  $('.sign-in').removeClass('d-none')
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
  // $('#change-password').removeClass('d-none')
  $('#sign-out').removeClass('d-none')
  $('.sign-in').addClass('d-none')
  $('.sign-up').addClass('d-none')
  $('#game-message').removeClass('d-none')
  $('#game').removeClass('d-none')
  $('#navbar').removeClass('d-none')
  $('#title').addClass('d-none')
}

const signInFailure = function () {
  $('#auth-message').text('Sign in failed, check that your email and password are correct')
  $('#sign-in input').val('')
}

const changePwClick = function () {
  $('#change-password').removeClass('d-none')
}

const changePasswordSuccess = function () {
  $('#create-game-form input').val('')
  $('#auth-message').text('Password changed')
  $('#change-password input').val('')
  $('#change-password').addClass('d-none')
}

const changePasswordFailure = function () {
  $('#create-game-form input').val('')
  $('#auth-message').text('Password not changed')
  $('#change-password input').val('')
}

const signOutSuccess = function () {
  // $('#auth-message').text('Sign out successful')
  $('#sign-out input').val('')
  $('#create-game-form input').val('')
  $('#change-password input').val('')
  // Show sign up / sign in / title
  $('#title').removeClass('d-none')
  $('#sign-in').removeClass('d-none')
  $('#sign-up').removeClass('d-none')
  // hide nav bar, change password, update game, create game // auth-message
  $('#auth-message').text('')
  $('#navbar').addClass('d-none')
  $('#game').addClass('d-none')
  $('#change-password').addClass('d-none')
  $('#content').addClass('d-none')
  $('#update-game').addClass('d-none')
  // will go in the navbar
  $('#hide-games-btn').addClass('d-none')
  $('.sign-in').removeClass('d-none')
  store.user = null
}

const signOutFailure = function () {
  $('#auth-message').text('Sign out failed')
  $('#sign-out input').val('')
}

const toggleSignUp = function () {
  $('.sign-in').addClass('d-none')
  $('.sign-up').removeClass('d-none')
  $('#sign-in input').val('')
  $('#auth-message').text('')
}

const toggleSignIn = function () {
  $('.sign-in').removeClass('d-none')
  $('.sign-up').addClass('d-none')
  $('#sign-up input').val('')
  $('#auth-message').text('')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  changePwClick,
  toggleSignIn,
  toggleSignUp
}
