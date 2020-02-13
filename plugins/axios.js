export default function({ $axios, store, redirect, error }) {
  $axios.onRequest(config => {
    store.dispatch('loadingStart')

    let token = store.getters['auth/jwtDecoded'] || null
    let authorized = token && token.exp > Date.now() / 1000

    if (authorized) {
      config.headers.common.Authorization = 'Bearer ' + store.state.auth.token
    }

    if (process.env.NODE_ENV !== 'production') {
      if (config.url.indexOf('?') > -1) {
        config.url += '&XDEBUG_SESSION_START=PHPSTORM'
      } else {
        config.url += '?XDEBUG_SESSION_START=PHPSTORM'
      }
    }

    return config
  })

  $axios.onResponse(data => {
    store.dispatch('loadingStop')
  })

  $axios.onError(e => {
    store.dispatch('loadingStop')

    const code = parseInt(e.response && e.response.status)
    if (code === 401) {
      redirect('/signin')
    }

    if (code === 404) {
      return error({ statusCode: 404, message: e.message })
    }
  })
}
