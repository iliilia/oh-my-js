export const sample = (items) => {
  return items[Math.floor(Math.random() * items.length)]
}

export const print = (selector, text) => {
  const container = document.querySelector(selector)
  container.innerHTML += text + '<br>'
}

export const clear = (selector) => {
  const container = document.querySelector(selector)
  container.innerHTML = ''
}
