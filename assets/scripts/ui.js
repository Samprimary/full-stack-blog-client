const store = require('./store.js')
const handlebars = require('./playlists.handlebars')
const playlistEvents = require('./events.js')

// Auth starts
const signInSuccess = function (response) {
  store.user = response.user
  $('#display').html('Signed in successfully!')
  $('#create-playlist').show()
  $('#get-playlist').show()
  $('#change-password').show()
  $('#sign-out').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
}

const signInError = function (error) {
  $('#display').html('Sign in unsuccessful, please try again!', (error))
}

const signUpSuccess = function (response) {
  $('#display').html('Signed up successfully!')
}
const signUpError = function (error) {
  $('#display').html('Sign up unsuccessful, please try again.', (error))
}

const changePasswordSuccess = function (changePasswordResponse) {
  $('#display').html('Password changed successfully!')
}
const changePasswordError = function (error) {
  $('#display').html('Password change unsuccessful, please try again.', (error))
}

const signOutSuccess = function (signOutResponse) {
  delete store.user
  $('#display').html('Signed out successfully!')
  $('#content').html('')
  $('#create-playlist').hide()
  $('#get-playlist').hide()
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#sign-up').show()
  $('#sign-in').show()
}

const signOutError = function (error) {
  $('#display').html('Failed to sign out.', error)
}

// Auth ends

// Playlist starts

const createPlaylistSuccess = function (response) {
  $('#display').html('Playlist created successfully!')
}

const createPlaylistError = function (error) {
  $('#content').html('Playlist creation unsuccessful', error)
}

// use handlebars for below
const getPlaylistSuccess = function (data) {
  // console.log('response is ', response)
  $('#display').html('Playlists retrieved successfully!')
  const showPlaylistsHtml = handlebars({ playlists: data.playlists })
  $('#content').html('')
  $('#content').append(showPlaylistsHtml)
}
// use handlebars for above

const getPlaylistError = function (error) {
  $('#display').html('Playlist retrieval unsuccessful', error)
}

const deletePlaylistSuccess = function (playlistId) {
  $('#display').html('Playlist deleted successfully!')
  $('#content').html('')
}
const deletePlaylistError = function (error) {
  $('#display').html('Cannot delete playlist', error)
}

const findPlaylistSuccess = function (response) {
  $('#display').html('Playlist found successfully!')
}
const findPlaylistError = function (error) {
  $('#display').html('Playlist find unsuccessful', error)
}

const updatePlaylistSuccess = function (playlistId) {
  $('#display').html('Playlist updated successfully!')
  $('#content').html('')
}
const updatePlaylistError = function (error) {
  $('#display').html('Playlist update unsuccessful', error)
}

// Playlist ends

module.exports = {
  // Auth starts
  signInSuccess: signInSuccess,
  signInError: signInError,
  signUpSuccess: signUpSuccess,
  signUpError: signUpError,
  changePasswordSuccess: changePasswordSuccess,
  changePasswordError: changePasswordError,
  signOutSuccess: signOutSuccess,
  signOutError: signOutError,
  // Auth ends
  // Playlist starts
  createPlaylistSuccess: createPlaylistSuccess,
  createPlaylistError: createPlaylistError,
  getPlaylistSuccess: getPlaylistSuccess,
  getPlaylistError: getPlaylistError,
  deletePlaylistSuccess: deletePlaylistSuccess,
  deletePlaylistError: deletePlaylistError,
  findPlaylistSuccess: findPlaylistSuccess,
  findPlaylistError: findPlaylistError,
  updatePlaylistSuccess: updatePlaylistSuccess,
  updatePlaylistError: updatePlaylistError
  // Playlist ends
}
