'use strict'
const gameEvents = require('./game/events')
const authEvents = require('./auth/events')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('.poop').on('click', () => console.log('BUTTS!'))
})
