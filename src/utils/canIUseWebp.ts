import { detect } from 'detect-browser'

const browser = detect()

let webpChrome = false
let webpSafari = false
let webpFirefox = false
let webpOpera = false

if (browser) {
  const name = browser.name
  const version = browser.version?.split('.')[0] || 0

  webpChrome = name === 'chrome' && version < 32
  webpSafari = name === 'safari' && version < 14
  webpFirefox = name === 'firefox' && version < 65
  webpOpera = name === 'opera' && version < 19
}

export const canIuseWEBP = !(webpSafari || webpFirefox || webpOpera || webpChrome)
