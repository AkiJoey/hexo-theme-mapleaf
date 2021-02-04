// type.js

window.is_home = () => {
  const { type } = GLOBAL_CONFIG
  return type === 'home'
}

window.is_archive = () => {
  const { type } = GLOBAL_CONFIG
  return type === 'archive'
}

window.is_category = () => {
  const { type } = GLOBAL_CONFIG
  return type === 'category'
}

window.is_tag = () => {
  const { type } = GLOBAL_CONFIG
  return type === 'tag'
}

window.is_post = () => {
  const { type } = GLOBAL_CONFIG
  return type === 'post'
}
