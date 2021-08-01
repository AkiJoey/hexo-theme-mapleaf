// tag (random color and size)

const list = document.querySelectorAll("#tag a")

const randomInteger = (start, end) => {
  const diff = end - start
  return Math.floor(Math.random() * diff + start)
}

const randomColor = (start, end) => {
  const rc = randomInteger.bind(null, start, end)
  return `rgb(${rc()},${rc()},${rc()})`
}

const randomSize = (start, end) => {
  return `${randomInteger(start, end)}px`
}

if (document.body.clientWidth > 768) {
  Array.prototype.forEach.call(list, (item, index) => {
    item.style.fontSize = randomSize(15, 35) //15 ~ 35
    item.style.color = randomColor(0, 200) // 0,0,0 -> 200,200,200
  })
} else {
  Array.prototype.forEach.call(list, (item, index) => {
    item.style.fontSize = randomSize(15, 28) //15 ~ 28
    item.style.color = randomColor(0, 200) // 0,0,0 -> 200,200,200
  })
}
