// optimize.js

window.debounce = function debounce(callback, delay) {
  let timer
  return function(...args) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      callback.call(this, ...args)
    }, delay)
  }
}
window.throttle = function throttle(callback, delay) {
  let vaild = true
  return function(...args) {
    if (vaild) {
      callback.call(this, ...args)
      vaild = false
      setTimeout(() => {
        vaild = true
      }, delay)
    }
  }
}

// lazy load
const imgs = document.querySelectorAll('#post-content img')
imgs.forEach(img => {
  img.dataset.src = img.src
  img.removeAttribute('src')
})
const onerror = event => {
  const element = event.target
  element.onerror = null
  element.src = config.error.cover
}
const io = new IntersectionObserver(entries => {
  entries.forEach(item => {
    if (item.isIntersecting) {
      const element = item.target
      element.src = element.dataset.src
      element.onerror = onerror
      element.removeAttribute('data-src')
      io.unobserve(element)
    }
  })
})
document.querySelectorAll('[data-src]').forEach(element => {
  io.observe(element)
})
