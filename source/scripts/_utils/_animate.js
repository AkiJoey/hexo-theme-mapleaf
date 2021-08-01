// animate.js

function getStyle(element, key) {
  if (element.currentStyle) {
    return element.currentStyle[key]
  } else {
    return getComputedStyle(element, null)[key]
  }
}

window.animate = (element, attributes, callback) => {
  clearInterval(element.timer)
  element.timer = setInterval(() => {
    Object.keys(attributes).forEach((key, index, keys) => {
      const opacity = key === 'opacity'
      const start = parseInt(getStyle(element, key) * (opacity ? 100 : 1))
      const diff = (attributes[key] - start) / 8
      const current = start + (diff > 0 ? Math.ceil(diff) : Math.floor(diff))
      element.style[key] = opacity ? current / 100 : current + 'px'
      if (index === keys.length - 1 && attributes[key] === current) {
        clearInterval(element.timer)
        callback && callback()
      }
    })
  }, 30)
}
