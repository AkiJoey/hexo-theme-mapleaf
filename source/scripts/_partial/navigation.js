// navigation

const $nav = document.querySelector('nav')

window.addEventListener('scroll', () => {
  if (window.scrollTop > 0) {
    $nav.activate()
    if (window.scrollDirection === 'up') {
      $nav.show()
    } else {
      $nav.hide()
    }
  } else {
    $nav.show()
    $nav.inactivate()
  }
})
