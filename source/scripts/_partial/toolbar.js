// toolbar

const $toolbar = document.getElementById('toolbar')

window.addEventListener('scroll', debounce(() => {
  if (window.scrollTop > 0) {
    $toolbar.show()
  } else {
    $toolbar.hide()
  }
}, 200))

// listener

const listener = {
  upper: () => {
    window.scrollToElement('body')
  },
  config: () => {
    $toolbar.childNodes.forEach((element, index, nodes) => {
      if (index < nodes.length - 2) {
        element.toggleAttribute('hidden')
      }
    })
  }
}

Object.keys(listener).forEach(key => {
  const $button = document.getElementById(`toolbar-${key}`)
  $button.addEventListener('click', listener[key])
})
