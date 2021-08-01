// filter

const filters = {
  ['stylus:renderer']: function(style) {
    style.define('test', () => {
      console.log('stylus test')
      // console.log(this)
    })
  }
}

Object.keys(filters).forEach(key => {
  hexo.extend.filter.register(key, filters[key])
})
