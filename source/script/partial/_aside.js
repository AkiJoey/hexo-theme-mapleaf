// aside.js

const runtime = document.getElementById('webinfo_runtime_count')
if (runtime && runtime.innerHTML) {
  const date = runtime.innerHTML
  const start = new Date(date).getTime()
  const end = new Date().getTime()
  const time = (end - start) / 86400 / 1000
  runtime.innerHTML = Math.floor(time) + ' d'
}
