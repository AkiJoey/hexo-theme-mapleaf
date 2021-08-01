// aside.js

// compute runtime
const runtime = document.getElementById('webinfo_runtime_count')
if (runtime && runtime.innerHTML) {
  const date = runtime.innerHTML
  const start = new Date(date).getTime()
  const end = new Date().getTime()
  const time = (end - start) / 86400 / 1000
  runtime.innerHTML = Math.floor(time) + ' d'
}

// table of content
if (is_post()) {
  const $toc = document.getElementById('aside-toc')
  const $content = $toc.querySelector('.aside-item-content')
  const $links = $content.querySelectorAll('.toc-link')
  const $article = document.getElementById('post-content')
  const $heads = $article.querySelectorAll('h1,h2,h3,h4,h5,h6')
  
  window.addEventListener('scroll', () => {
    if (window.scrollTop > 0) {
      if (window.scrollDirection === 'up') {
        $toc.activate()
      } else {
        $toc.inactivate()
      }
    }
    setTocPercentage()
    setTocPosition()
  })

  // toc content event delegation
  $content.addEventListener('click', event => {
    event.preventDefault()
    let $link = event.target
    if (!$link.classList.contains('toc-link')) {
      $link = $link.parentElement
    }
    scrollToElement(decodeURI($link.getAttribute('href')))
  })
  
  // set toc percentage
  const setTocPercentage = function() {
    const { clientHeight, scrollHeight } = document.documentElement
    const articleHeight = $article.clientHeight
    const divisor = (articleHeight > clientHeight ? articleHeight : scrollHeight) - clientHeight
    let percentage = Math.round((window.scrollTop - $article.actualTop) / divisor * 100)
    percentage = percentage > 100 ? 100 : percentage < 0 ? 0 : percentage
    $toc.setAttribute('percentage', percentage)
  }
  
  // set toc position
  const activeList = []
  const setTocPosition = function() {
    activeList.forEach(element => {
      element.inactivate()
    })
    let position = undefined
    for (let index = 0; index < $heads.length; index++) {
      if ($heads[index].actualTop - window.scrollTop > 30) {
        break
      }
      position = index
    }
    if (position !== undefined) {
      if (config.isAnchor) {
        const anchor = encodeURI($heads[position].getAttribute('id'))
        window.router.replaceHistory('#' + anchor)
      }
      let current = $links[position]
      current.activate()
      activeList.push(current)
      while (!current.matches('.toc')) {
        if (current.matches('li')) {
          current.activate()
          activeList.push(current)
        }
        current = current.parentNode
      }
    }
  }
}

