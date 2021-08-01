// request.js

window.jsonp = ({url, data, callback}) => {
  return new Promise(resolve => {
    window[callback] = data => {
      resolve(data)
    }
    data.callback = callback
    const param = []
    Object.keys(data).forEach(key => {
      param.push(`${key}=${encodeURIComponent(data[key])}`)
    })
    const script = document.createElement('script')
    script.src = url + (url.indexOf('?') < 0 ? '?' : '&') + param.join('&')
    document.body.appendChild(script)
  })
}

window.ajax = ({url, method, data, headers}) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest()
    request.open(method, url)
    Object.keys(headers).forEach(key => {
      request.setRequestHeader(key, headers[key])
    })
    request.send(data)
    request.onreadystatechange = () => {
      if (request.readyState === 4) {
        if (request.state >= 200 && request.state <= 400) {
          resolve(request)
        } else {
          reject(request)
        }
      }
    }
  })
}
