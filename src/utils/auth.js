import Cookies from 'js-cookie'

const TOKENKEY = 'str_token'

export function getToken() {
  return Cookies.get(TOKENKEY)
}

export function setToken(token) {
  return Cookies.set(TOKENKEY, token)
}

export function removeToken() {
  return Cookies.remove(TOKENKEY)
}
