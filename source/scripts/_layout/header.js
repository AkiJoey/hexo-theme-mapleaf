// header.js

// header height
// const alignHeader = () => {
//   const header = document.getElementsByTagName('header')[0]
//   if (is_home()) {
//     header.style.height = window.innerHeight + 'px'
//   } else {
//     header.style.height = (isMobile() ? 15 : 20) + 'rem'
//   }
// }
// alignHeader()
// window.addEventListener('resize', () => {
//   alignHeader()
// })

if (is_home()) {
  const header = document.getElementsByTagName('header')[0]
  // background attachment fixed
  // if (!isMobile()) {
  //   header.style.backgroundAttachment = 'fixed'
  // }
  // header title glitch
  const span = document.getElementById('header-title').firstChild
  span.classList.add('glitch')
  span.setAttribute('data-text', span.innerHTML)
  // header down event listener
  document.getElementById('header-down').onclick = () => {
    scrollToElement('main')
  }
  // header rain canvas
  window.addEventListener('load', () => {
    const canvas = document.createElement('canvas')
    header.appendChild(canvas)
    if (canvas && canvas.getContext) {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      let w = canvas.width, h = canvas.height
      const ctx = canvas.getContext('2d')
      ctx.lineWidth = 1
      ctx.lineCap = 'round'
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)'
      const particles = []
      for (let i = 50;i > 0;i--) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          l: Math.random() * 8,
          xs: Math.random() - 0.5,
          ys: Math.random() * 10 + 10
        })
      }
      const draw = () => {
        ctx.clearRect(0, 0, w, h)
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)'
        particles.forEach(p => {
          ctx.beginPath()
          ctx.moveTo(p.x, p.y)
          ctx.lineTo(p.x + p.l * p.xs, p.y + p.l * p.ys)
          ctx.stroke()
        })
        move()
      }
      const move = () => {
        particles.forEach(p => {
          p.x += p.xs
          p.y += p.ys
          if (p.x > w || p.y > h) {
            p.x = Math.random() * w
            p.y = -20
          }
        })
      }
      window.addEventListener('resize', () => {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
        w = canvas.width, h = canvas.height
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)'
      })
      setInterval(draw, 10)
    }
  })
}
