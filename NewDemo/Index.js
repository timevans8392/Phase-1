$(document).ready(function() {
  $('#battleGif').css('visibility', 'hidden')
  getCharBanner()
})

var charmanderHP = 100
var victory = false

function getCharHead() {
  return 'Charmander' + charmanderHP + '/100 Hp'
}

function changeCharHead(damage, banner) {
  charmanderHP = charmanderHP - damage
  if (charmanderHP < 1) {
    victory = true
  }
  getCharBanner()
  updateInfoBanner(banner)
}

function getCharBanner() {
  $('#charHealth').prop('innerHTML', getCharHead)
}

function updateInfoBanner(banner) {
  console.log(victory)
  if (victory === false) {
    $('#informationRow').prop('innerHTML', banner)
  } else {
    youWin()
  }
}

function youWin() {
  $('#informationRow').prop('innerHTML', 'You win, refresh to play again')
  $('#moveOne').prop('disabled', true)
  $('#moveTwo').prop('disabled', true)
  $('#moveThree').prop('disabled', true)
  $('#moveFour').prop('disabled', true)
}

function moveOne() {
  console.log('button pressed')
  $('#battleGif').prop(
    'src',
    'https://media.giphy.com/media/oFBnvBcmga4XS/giphy.gif'
  )
  $('#battleGif').css('visibility', 'visible')
  changeCharHead(25, 'Squirtle used sexy')
}

function moveTwo() {
  console.log('button pressed')
  $('#battleGif').prop(
    'src',
    'https://media.giphy.com/media/3xgR6JaucMaXe/giphy.gif'
  )
  $('#battleGif').css('visibility', 'visible')
  changeCharHead(20, 'Squirtle used taunt')
}

function moveThree() {
  console.log('button pressed')
  $('#battleGif').prop(
    'src',
    'https://media.giphy.com/media/7L9FYvnh467YI/giphy.gif'
  )
  $('#battleGif').css('visibility', 'visible')
  changeCharHead(50, 'Squirtle used Squad Up!')
}

function moveFour() {
  console.log('button pressed')
  $('#battleGif').prop(
    'src',
    'https://media.giphy.com/media/xzBimPZR9loLS/giphy.gif'
  )
  $('#battleGif').css('visibility', 'visible')
  changeCharHead(10, 'I forgot what i named this')
}
