// polyfill.js

Object.inherit = (Child, Parent) => {
  const prototype = Object.create(Parent.prototype)
  prototype.constructor = Child
  Child.prototype = prototype
  Object.setPrototypeOf(Child, Parent)
}
Object.cloneDeep = obj => {
  const res = Array.isArray(obj) ? [] : {}
  Object.keys(obj).forEach(key => {
    if (obj[key] && typeof obj[key] === 'object') {
      res[key] = Object.cloneDeep(obj[key])
    } else {
      res[key] = obj[key]
    }
  })
  return res
}
Object.freezeDeep = function(obj) {
  Object.getOwnPropertyNames(obj).forEach(name => {
    const prop = obj[name]
    if (typeof prop === 'object' && prop !== null) {
      Object.deepFreeze(obj)
    }
  })
  return Object.freeze(obj)
}

// scroll
window.scrollToElement = function(name) {
  document.querySelector(name).scrollIntoView({
    behavior: 'smooth'
  })
}
Object.defineProperty(window, 'scrollTop', {
  get() {
    return window.scrollY
      || document.documentElement.scrollTop
      || document.body.scrollTop
  }
})
window.addEventListener('scroll', (() => {
  let lastTop = 0
  return () => {
    const scrollTop = window.scrollTop
    window.scrollDirection = scrollTop < lastTop ? 'up' : 'down'
    lastTop = scrollTop
  }
})())

// element
Element.prototype.activate = function activate() {
  this.setAttribute('active', '')
}
Element.prototype.inactivate = function inactivate() {
  this.removeAttribute('active')
}
Element.prototype.hide = function hide() {
  this.setAttribute('hidden', '')
}
Element.prototype.show = function show() {
  this.removeAttribute('hidden')
}
Object.defineProperty(Element.prototype, 'actualTop', {
  get() {
    let top = this.offsetTop
    let current = this.offsetParent
    while (current) {
      top += current.offsetTop
      current = current.offsetParent
    }
    return top
  }
})

// function
Function.prototype.curry = function curry() {
  if (arguments.length < this.length) {
    return curry.bind(this, ...arguments)
  }
  return this(...arguments)
}
Function.prototype.compose = function compose() {
  const args = [this, ...arguments]
  return args.reduce((res, val) => {
    return (...args) => res(val(...args))
  })
}
Function.prototype.pipe = function pipe() {
  const args = [this, ...arguments]
  return args.reduceRight((res, val) => {
    return (...args) => res(val(...args))
  })
}

// array
Array.prototype.unique = function unique() {
  return [...new Set(this)]
}
Array.prototype.flatten = function flatten() {
  return this.reduce((res, val) => {
    if (Array.isArray(val)) {
      val = flatten.call(val)
    }
    return res.concat(val)
  }, [])
}
Array.prototype.swap = function swap(x, y) {
  this[x] = this.splice(y, 1, this[x])[0]
  return this
}
Array.prototype.shuffle = function shuffle() {
  for (let i = this.length; i; i--) {
    this.swap(i - 1, Math.floor(Math.random() * i))
  }
  return this
}
