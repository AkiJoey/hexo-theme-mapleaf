// generator

const resolve = dir => {
  const last = dir.length - 1
  return dir[last] === '/' ? dir : `${dir}/`
}

const generators = {
  tags: function(locals) {
    return {
      path: resolve(this.config.tag_dir),
      data: {
        type: 'tags'
      },
      layout: ['tag']
    }
  },
  categories: function(locals) {
    return {
      path: resolve(this.config.category_dir),
      data: {
        type: 'categories'
      },
      layout: ['category']
    }
  }
}

Object.keys(generators).forEach(key => {
  hexo.extend.generator.register(key, generators[key])
})
