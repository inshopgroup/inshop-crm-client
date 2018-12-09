import axios from 'axios'

axios.defaults.timeout = 30000

axios.interceptors.request.use(config => {
  if (process.env.NODE_ENV !== 'production') {
    if (config.url.indexOf('?') > -1) {
      config.url = config.url + '&XDEBUG_SESSION_START=PHPSTORM'
    } else {
      config.url = config.url + '?XDEBUG_SESSION_START=PHPSTORM'
    }
  }

  return config
})

export default axios
